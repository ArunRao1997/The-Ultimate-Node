const express = require('express')
const mongoose = require('mongoose')
const categories = require('./Routes/categories')
const students = require('./Routes/students')
const courses = require('./Routes/courses')
const app = express()

mongoose.connect('mongodb://127.0.0.1/CrudMongoDB')
.then(()=> console.log('Connection is successful to MongoDB'))
.catch(err=> console.log('Could not connect to Mongodb', err))

app.use(express.json())
app.use('/api/categories', categories);
app.use('/api/students', students)
app.use('/api/courses', courses)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to port ${port}...`));