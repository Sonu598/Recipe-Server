const express=require('express');
const { connect } = require('./config/db');
const { recipeRouter } = require('./routes/recipe.route');
const cors=require("cors")
const app=express();
app.use(express.json());
app.use(cors())
require('dotenv').config();

app.use('/api',recipeRouter);

app.listen(process.env.PORT, async()=>{
    try {
        await connect;
        console.log('Connected to Database');
    } catch (err) {
        console.log(err.message);
    }
    console.log(`Server is running on port ${process.env.PORT}`);
})