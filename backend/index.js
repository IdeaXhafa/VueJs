const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const createError = require('http-errors');

const storage = multer.diskStorage({
  destination: (req,file,cb)=> {
    cb(null,'images')
  },
  filename: (req,file,cb)=> {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage})

// Connect mongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/library')
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

const studentAPI = require('../backend/routes/bestseller.route')
const bookAPI = require('../backend/routes/book.route')
const magazineAPI = require('../backend/routes/magazine.route')
const contactAPI = require('../backend/routes/contact.route')

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())

// API
app.use('/api', studentAPI, bookAPI, magazineAPI)
app.use('/contactapi',contactAPI)

// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})

app.get("/upload", (req,res)=> {
  res.render("upload");
})

app.post("/upload", upload.single("image") ,(req,res)=> {
  res.send("image uploaded")
})

app.use(express.static(__dirname + '/upload'));