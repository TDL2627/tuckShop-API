var express = require("express");
const router = express.Router();


// route for shops
router.get("/", function(req, res){
    let shops=[
        {name:"Tuck shop for thugs",
        pic:"shop1.png",
        time:"7AM -10PM",
        location:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.0533859217135!2d18.528060417443847!3d-33.96546729999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc44acedc01b71%3A0x310865ff465d2da7!2s25%20Bongo%20Cres%2C%20Silvertown%2C%20Cape%20Town%2C%207764!5e0!3m2!1sen!2sza!4v1648471411513!5m2!1sen!2sza" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> `,
        type:"Somalian"
        }
      ]
      res.send(shops)
 });

module.exports = router;