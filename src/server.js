const express = require("express");
const app = express();

// always indicate the function with (request, response) => {}
app.get("/", (req, res) => {
    // any code is valid here
    console.log("/ endpoint has been hit");
    // last thing we do is a send response
    res.send("Hello Kov");
});

// created a new get route named "kov" with a response containing an object with my name and age 
app.get("/kov", (req,res) => {
    let person = {
        fName: "Sofia",
        lName: "Kovalevskaia",
        age: 27,
    };
    res.send({person});
});

// created another get route named "kovother" to see which style of code I prefer for objects 
app.get("/kovother", (req,res) => {
    res.send({person: {fName: "Sofia", lName: "Kovalevskaia", age: 27}});
});

app.listen(5000, () => {
    console.log("listening on port 5000");
});