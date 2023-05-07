const express = require('express');
const path = require("path");
const app = express();
const formidable = require('formidable');

var database = require("./backend/database");

app.use(express.static(path.join(__dirname, "/views")));

app.get("/get_courses", async (req, res) => { 
    const result  = await database.allCourses()
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(result));
});

app.post("/apply",  (req, res) => {
    const form = formidable({ multiples: true });
    form.parse(req, async (err, fields, files) => {
       await database.apply(fields);
        res.send({ success: true });
    });
})

app.listen(3000, ()=> {
    console.log(`server is running in port 3000`);
})