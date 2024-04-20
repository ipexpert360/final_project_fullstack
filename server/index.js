import express from 'express';
import connectDB from './utils/db.js';
import dotenv from "dotenv"
import register from './controllers/userController.js';


// import {run} from './db.js';

// run().catch(console.dir);
dotenv.config();
const app = express();
const port = 3000
connectDB();
app.get('/', register)

app.get('/login', (req,res) => {
  res.send('Login World!');
});
app.post('/signup', (req,res) => {
  const {fullname,email,password,confirmpassword,phonenumber} = req.body
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)

});