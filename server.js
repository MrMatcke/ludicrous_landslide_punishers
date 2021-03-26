// Dependencies
const cookieParser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const User = require("./models/user");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
// Creating an instance of handlebars
// const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
// If the below line doesn't work, try app.set('port',9000);
app.set("port", 9000);
// const PORT = process.env.PORT || 3001;
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    key: "user_sid",
    secret: "somesecret",
    resave: false,
    saveUninitalized: false,
    cookie: {
      expires: 600000,
    },
  })
);

// Set Handlebars as the default template engine.
// (CODE FROM VERSION 1) app.engine("handlebars", hbs.engine);
// (CODE FROM VERSION 1) app.set("view engine", "handlebars");

// Explanation of below code: Handlebars uses hbs variable created up top, defaultLayout is called 'layout'.  Where is it? It is in the directory: /views/layouts
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layout",
  })
);
app.set("view engine", "hbs");

// Explanation of below code: If someone is logged in, the cookie stores the information about the user id.  The cookie information is dependent on the application server.  Cookies depending on browser information.  If the application starts and server crashes, this clearscookies
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
});

// This is the handlebars content and it will change for every page
var hbsContent = {
  userName: "",
  loggedin: false,
  title: "You are not logged in today",
  body: "Hello World",
};

// Code explanation: middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect("/dashboard");
  } else {
    next();
  }
};

// route for Home-Page
app.get("/", sessionChecker, (req, res) => {
  res.redirect("/login");
});

// route for signup page
app
  .route("/signup")
  .get((req, res) => {
    //res.sendFile(__dirname + '/public/signup.html);
    res.render("signup", hbsContent);
  })
  .post((req, res) => {
    User.create({
      username: req.body.username,
      password: req.body.password,
    })
      .then((user) => {
        req.session.user = user.dataValues;
        res.redirect("/dashboard");
      })
      .catch((error) => {
        res.redirect("/signup");
      });
  });

// route for user login
// Code Explanation, the code below: Queries the database checks to see if the password matches, if not see else statements
app
  .route("/login")
  .get(sessionChecker, (req, res) => {
    //res.sendFile(__dirname + '/public/login.html');
    res.render("login", hbsContent);
  })
  .post((req, res) => {
    var username = req.body.username,
      password = req.body.password;

    User.findOne({ where: { username: username } }).then(function (user) {
      if (!user) {
        res.redirect("/login");
      } else if (!user.validPassword(password)) {
        res.redirect("/login");
      } else {
        req.session.user = user.dataValues;
        res.redirect("/dashboard");
      }
    });
  });

// route for user's dashboard
app.get("/dashboard", (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    hbsContent.loggedin = true;
    hbsContent.userName = req.session.user.username;
    //console.log(JSON.stringify(req.session.user));
    console.log(req.session.user.username);
    hbsContent.title = "You are logged in";
    //res.sendFile(__dirname + '/public/dashboard.html');
    res.render("index", hbsContent);
  } else {
    res.redirect("/login");
  }
});

// route for user logout
app.get("/logout", (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    hbsContent.loggedin = false;
    hbsContent.title = "You are logged out!";
    res.clearCookie("user_sid");
    console.log(JSON.stringify(hbsContent));
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
});

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

// start the express server
app.listen(app.get("port"), () =>
  console.log(`App started on port ${app.get("port")}`)
);

// (CODE FROM VERSION 1 BELOW)
// app.use(express.static(path.join(__dirname, "public")));
// app.use(require("./routes/home-routes"));

// // Allow Handlebars to use images -- NOT SURE IF THIS WILL WORK
// app.use(express.static("./public/images"));

// // Starts the server to begin listening
// app.listen(PORT, () => {
//   console.log("Server listening on: http://localhost:" + PORT);
// });
