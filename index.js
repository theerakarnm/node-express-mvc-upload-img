// create express app
const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer');

const userInfo = require('./routers/getName');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('/assets/img'));

app.get('/', (req, res) => {
  res.send({a:'Hello World!'});
})

app.post('/post', (req, res) => {
  const { context } = req.body

  console.log(context);
})

app.use('/users', userInfo);

app.listen(8888, () => {
    console.log('server is running on port 8888');
})