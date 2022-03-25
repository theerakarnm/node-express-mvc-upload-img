// create router express
const express = require('express');
const multer = require('multer');
const router = express.Router();

const { 
  getUserName,
  getUserLastName,
  addUser,
  showImg 
} = require('../controllers/userInfo');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './assets/img')
  },
  filename: (req, file, cb) => {
    cb(null, 'file-' + Date.now() + '.' +
    file.originalname.split('.')[file.originalname.split('.').length-1])}
})

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // limit 5MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Please upload an image'));
    }

    cb(undefined, true);
  }
});

router.route('/getName')
.get(getUserName)

router.route('/getLastName')
.get(getUserLastName)

router.route('/showImg/:id')
.get(showImg)

router.post('/addUser', upload.single('avatar'), addUser);

module.exports = router;