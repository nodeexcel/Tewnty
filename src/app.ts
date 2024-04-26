import express from 'express';
import {companyRouter} from '../src/routes/company'
import env from 'dotenv'
import mongoose from 'mongoose';
env.config()

const app = express();
const port = process.env.PORT || 3000;


app.use('/company', companyRouter);

mongoose.connect('mongodb://localhost:27017/twenty')
.then(() =>{
    console.log("DB connected");
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    })
})