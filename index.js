const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
// const studentRouter = require("./routes/studentRouter")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
// app.use("/students", studentRouter);

app.set("port", process.env.port || 2627);


// router links
app.get("/", function(req, res){
    res.send(`<h1>Welcome `)
});


// app.get("/students", function(req, res){
//     res.send(students)
// });

const port = process.env.PORT || 2627;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
