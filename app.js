const express = require("express");
const app = express();
const userModel = require("./models/User");
const postModel = require("./models/post");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = "shhhh"; // Replace with your actual secret key

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile", isLoggedIn, async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.user.email }).populate("post"); // Properly populate the 'post' field
    // console.log(user);
    res.render("profile", { user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});
app.get("/likes/:id", isLoggedIn, async (req, res) => {
  try {
    let post = await postModel.findById(req.params.id).populate("user");
    
    if(post.likes.indexOf(req.user.userid) === -1)
    {
        post.likes.push(req.user.userid);
    }
    else
    {
      post.likes.splice(post.likes.indexOf(req.user.userid),1);
    }
    
    
      await post.save();
    

    res.redirect("/profile");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});
app.get("/edit/:id", isLoggedIn, async (req, res) => {
    let post = await postModel.findById(req.params.id).populate("user");
    res.render("edit",{post});  
});
app.post("/update/:id", isLoggedIn, async (req, res) => {
  let post = await postModel.findOneAndUpdate({_id: req.params.id} ,{content : req.body.content});
  res.redirect("/profile");  
});

app.post("/post", isLoggedIn, async(req, res) => {
  let user = await userModel.findOne({email: req.user.email});
  let {content} = req.body;
  let post = await postModel.create({
    user:user._id,
    content
  });
  user.post.push(post._id);
  await user.save();
  res.redirect('/profile');
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/register", async (req, res) => {
  let { email, password, username, age, name } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).send("User is Already Registered");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    let newUser = await userModel.create({
      email,
      username,
      age,
      name,
      password: hash,
    });

    let token = jwt.sign(
      {
        email: email,
        userid: newUser._id,
      },
      JWT_SECRET_KEY
    );

    res.cookie("token", token, { httpOnly: true });
    res.send("Registered!!");
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }

    const result = await bcrypt.compare(password, user.password);
    if (result) {
      let token = jwt.sign(
        {
          email: email,
          userid: user._id,
        },
        JWT_SECRET_KEY
      );

      res.cookie("token", token, { httpOnly: true });
      res.status(200).redirect("/profile");
    } else {
      res.status(400).send("Invalid email or password");
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Server error");
  }
});

app.get("/logout", (req, res) => {
  res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
  res.redirect("/login");
});
app.get("/thoughts", isLoggedIn, async (req, res) => {
  try {
    // Fetch all posts without populating the user field
    const posts = await postModel.find({}).select("content date likes");

    // Render the posts without exposing user info
    res.render("thought", { posts });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

function isLoggedIn(req, res, next) {
  if(req.cookies.token === "") res.redirect("/login");
  try {
    const data = jwt.verify(req.cookies.token, JWT_SECRET_KEY);
    req.user = data;
    console.log("User data from token:", req.user); 
    next();
  } catch (err) {
    console.error("Invalid token:", err);
    res.status(401).send('Invalid token');
  }
}


app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
