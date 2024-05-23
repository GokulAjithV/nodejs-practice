const express = require("express");
const app = express();

//routers reference
const comedyRouter = require("./components/comedy/router");
const crimeRouter = require("./components/crime/router");
const dramaRouter = require("./components/drama/router")
const fantasyRouter = require("./components/fantasy/router");
const thrillerRouter = require("./components/thriller/router");

//root route 
app.get("/", (req,res) => {
    res.json({
        success: true,
        msg: "Hello World, Its an api calling"
    });
});

//register routes 
app.use("/shows/codemy", comedyRouter);
app.use("/shows/crime", crimeRouter);
app.use("/shows/drama", dramaRouter);
app.use("/shows/fantasy", fantasyRouter);
app.use("shows/thriller", thrillerRouter);


module.exports = app;