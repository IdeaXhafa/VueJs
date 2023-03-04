import {
  MONGO_CONNECTION_URI,
  MONGO_DB_NAME,
  API_PORT,
  MONGO_DB_PORT
} from './config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bookAPI from './routes/book.route'
import bestsellerAPI from './routes/bestseller.route'
import contactAPI from './routes/contact.route'
import cartAPI from './routes/cart.route'
import bodyParser from 'body-parser'
import pinkAPI from './routes/pink.route'
import audiobookAPI from './routes/audiobook.route'
import savedAPI from './routes/saved.route'

mongoose.connect(`${MONGO_CONNECTION_URI}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`).then(() => {
  console.log(`Connected to mongodb on port ${MONGO_DB_PORT}`);

  const app = express();

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  app.use(
      cors({
          origin: '*'
      })
  );

  // app.use(express.urlencoded({ extended: true }))

  // app.use(express.json());

  // API
app.use('/api', bookAPI, contactAPI, bestsellerAPI, cartAPI, pinkAPI, audiobookAPI, savedAPI)
  
  //port
  app.listen(API_PORT, () => {
      console.log(`Blog api listening on port: ${API_PORT}`)
  });

  //404
app.get('*', (req, res) =>  res.status(404).json({ content: 'not_found'})); 

//errors
app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
})







// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const multer = require('multer');
// const path = require('path');
// const createError = require('http-errors');

// const storage = multer.diskStorage({
//   destination: (req,file,cb)=> {
//     cb(null,'images')
//   },
//   filename: (req,file,cb)=> {
//     console.log(file)
//     cb(null, Date.now() + path.extname(file.originalname))
//   }
// })

// const upload = multer({storage: storage})

// // Connect mongoDB
// mongoose
//   .connect('mongodb://127.0.0.1:27017/library')
//   .then((x) => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch((err) => {
//     console.error('Error connecting to mongo', err.reason)
//   })

// const studentAPI = require('../backend/routes/bestseller.route')
// const bookAPI = require('../backend/routes/book.route')
// const magazineAPI = require('../backend/routes/magazine.route')
// const contactAPI = require('../backend/routes/contact.route')
// const photoAPI = require('../backend/routes/photo.route')

// const app = express()
// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   }),
// )
// app.use(cors())

// // API
// app.use('/api', studentAPI, bookAPI, magazineAPI,contactAPI,photoAPI)
// // app.use('/contactapi',contactAPI)

// // Create port
// const port = process.env.PORT || 4000
// const server = app.listen(port, () => {
//   console.log('Connected to port ' + port)
// })

// // Find 404
// app.use((req, res, next) => {
//   next(createError(404))
// })

// // error handler
// app.use(function (err, req, res, next) {
//   console.error(err.message)
//   if (!err.statusCode) err.statusCode = 500
//   res.status(err.statusCode).send(err.message)
// })

// app.get("/upload", (req,res)=> {
//   res.render("upload");
// })

// app.post("/upload", upload.single("image") ,(req,res)=> {
//   res.send("image uploaded")
// })

// app.use(express.static(__dirname + '/upload'));