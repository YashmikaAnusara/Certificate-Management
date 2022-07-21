const path = require("path");
const multer = require("multer");
const router = require("express").Router();
var storage

router.route("/requset").post((req, res) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "Payment_Slip/");
    },
    filename: function (req, file, cb) {
      let name = path.basename(file.originalname);
      cb(null, name);
    },
  });
})
var upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    // if(
    //     file.mimetype=="image/png"||
    //     file.mimetype=="image/jpg"
    // ){
    callback(null, true);
    // }
    // else{
    //     console.log("only jpg png can supported")
    //     callback(null,false)
    // }
  },
  // limits:{
  //     fileSize:100000
  // }
});

module.exports = upload;