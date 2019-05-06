const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
  console.log(`API running on localhost`);
});
var x="world";
var y=5;
module.exports.x = x;
module.exports={
    say: function(){
        return "hello";
    },
    num:function(){
        return y;}
}
