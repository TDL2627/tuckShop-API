const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const shopRouter = require("./routes/shopRoute")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use("/shops", shopRouter);

app.set("port", process.env.port || 2627);


// router links
app.get("/", function(req, res){
    res.send(`<h1>Welcome to my Tuck Shop Finder </h1>
    <br>
    <hr>
    <p> DEVELOPED BY TDL2627</p>
    `)
});


app.get("/shops", function(req, res){
    res.send(shops)
});

const port = process.env.PORT || 2627;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
