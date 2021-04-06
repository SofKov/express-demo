const express = require("express");
const { saveTask }  = require("../utils/notes");

// Init the instance of express
const app = express();

// middleware
app.use(express.json());

// GET METHOD

// always indicate the function with (request, response) => {}
app.get("/", (req, res) => {
    // any code is valid here - this is still javascript code
    console.log(req.query);
    // last thing we do is a send response - ALWAYS
    res.send({message:`Hello your name is ${req.query.name}.`});
});

// created a new get route named "kov" with a response containing an object with my name and age 
// app.get("/kov", (req, res) => {
//     let person = {
//         fName: "Sofia",
//         lName: "Kovalevskaia",
//         age: 27,
//     };
//     res.send({person});
// });

// setting up a query string with my name and age, and sending it as a response
// query strings are one of the ways of sending info to your server - the request can have query objects inside, and if we meet the requirements to that (i.e ? to signify the start of query string and assign values accordingly) - that object is then stored in the server - this data is then used at a later point
app.get("/kov", (req, res) => {
    console.log(req.query);
    res.send({message: `Hello ${req.query.name}, you are ${req.query.age} years old.`});
});

// created another get route named "kovother" to see which style of code I prefer for objects 
app.get("/kovother", (req,res) => {
    res.send({person: {fName: "Sofia", lName: "Kovalevskaia", age: 27}});
});


// set up path parameters - part of get request but allows us to provide more information with the get request 
// :id logs an object named {id: '300'} - will always stringify the object as it is key value pairs
// path parameters are useful for retrieving individual pieces of data from databases - normal get request would get ALL dogs from the db, but GET /dog/:id would get a specific single dog from the db

// app.get("/dog/:id", (req, res) => {
//     console.log(req.params);

//     res.send({message: "woof"});
// });


// another type of path param - name
// :name logs an object named {name: 'gypsy'} 
app.get("/dog/:name", (req, res) => {
    console.log(req.params);

    res.send({message: "woof"});
});

// created get route for /person/:id, made the request via insomnia and logge dthe id to the terminal in vscode 
app.get("/person/:id", (req, res) => {
    console.log(req.params.id);
    res.send({message: "person id logged to server"});
});

//--------------------------------------------------------------------------------------------------------------

// POST METHOD
// post requests

app.post("/", (req, res) => {
    console.log(req.body);
    res.send({message: `You entered info under the name ${req.body.name}`});
});

app.post("/game", (req, res) => {
    console.log(req.body);
    res.send({message: `Your favourite game is ${req.body.title}`});
});

// created post route called "/tasks" - used insomnia to send a json task - when the route hits its endpoint in express, the task is saved to a .txt file calles "tasks.txt" - finish controller by sending back a string "success" to indicate successful task
app.post("/tasks", (req, res) => {
    console.log(req.body);
    saveTask(req.body.task);
    res.send({message: `Success`});
})


app.listen(5000, () => {
    console.log("listening on port 5000");
});