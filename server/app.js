const express = require('express');
const connectDB = require('./config/db')
const userRoutes = require('./routes/user')
const contactFormRoutes = require('./routes/contactForm')
require('dotenv').config();
const PORT = 7000 || process.env.PORT
const cors = require('cors')

const app = express();
app.use(express.json());

const corsOption = {
    exposedHeaders :  ['Content-Length','Authorization','token'],
    origin:'http://localhost:3000'
  }
  
app.use(cors(corsOption))
connectDB();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});
app.use('/api',userRoutes)
app.use('/api',contactFormRoutes)

app.listen(PORT,()=>{
    console.log("API IS RUNNING ON 7000")
})

