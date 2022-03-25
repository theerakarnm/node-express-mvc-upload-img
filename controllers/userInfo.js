const multer = require('multer');



const getUserName = (req, res) => {
    res.send({name: 'John'});
}

const getUserLastName = (req, res) => {
  res.send({name: 'Doe'});
}

const addUser = (req, res) => {
  console.log(req.file);
  const { name, lastName } = req.body;
  console.log(name, lastName);

  res.send({messsage : 'User added'});
}

const showImg = (req, res) => {
  const filePath =  '/Users/jametirakarn/Desktop/nodeServerLearn/assets/img/' + req.params.id;
  res.sendFile(filePath);
};

module.exports = {
  getUserName,
  getUserLastName,
  addUser,
  showImg
}