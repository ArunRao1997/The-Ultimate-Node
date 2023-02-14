const express = require('express')

const morgan = require('morgan')

const myMiddlewareFunction = require('./middleware/middle')

const myMiddlewareFunction2 = require('./middleware/middle_2')


const app = express()

app.use(express.json())

app.use(myMiddlewareFunction)

app.use(myMiddlewareFunction2)

app.use(morgan('tiny'))

app.use(function(req, res, next){
    console.log('I am custom Middleware')
    next()
})

app.use(function(req, res, next){
    console.log('I am second Middleware')
    next()
})

//get, post, put, delete

const courses = [
    {id:1, name:'JavaScript'},
    {id:2, name:'Java'},
    {id:3, name:'Python'}
]
app.get('/', (req, res)=>{
    res.send('Hello Get Method')
})

app.get('/about',(req, res)=>{
    res.send('We fetched /about')
})

app.get('/contact',(req, res)=>{
    res.send('Contact me @rao.nayineni')
})

app.get('/courses',(req, res)=>{
    res.send(courses)
})

//Create
app.post('/courses', (req, res)=>{
    let course = {
        id: courses.length+1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)    
})

//Update
app.put('/courses/:name', (req, res)=>{
    let course = courses.find(course => course.name === req.params.name)

    if(!course) res.status(404).send('The course you are looking does not exist')

    course.name = req.body.name
    res.send(course)
})

// app.delete('/courses/:name', (req, res)=>{
//     let updatedCourses = courses.filter(course => course.name !== req.params.name)
    
//     course = updatedCourses
//     res.send(course)
// })

app.delete('/courses/:id', (req, res)=>{
    let course = courses.find(course => course.id === parseInt(req.params.id))
    console.log(course)
    //let course = courses.find(course => course.name === req.params.name)
    if(!course) res.status(404).send('The course you are looking does not exist')

    const index = courses.indexOf(course)

    courses.splice(index,1)

    res.send(course)
})

// Route parameters
app.get('/course/:id',(req, res)=>{
    //res.send(req.params.id)
    let course = courses.find(course => course.id === parseInt(req.params.id))
    //let course = courses.find(course => course.name === req.params.name)
    if(!course) res.status(404).send('The course you are looking does not exist')
    res.send(course)
})

const port = process.env.PORT || 3000

// only specific port
//app.listen(3000, ()=>console.log('Port is set to 3000'))

//setting dynamic port
app.listen(port, ()=>console.log(`Port is set to ${port}`))