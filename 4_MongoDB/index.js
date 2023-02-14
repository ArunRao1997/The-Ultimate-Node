const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(()=> console.log('Connection is successful'))
.catch(err=> console.log('Could not connect to Mongodb', err))

// Schema

const courseSchema = new mongoose.Schema({
    name : {type:String,required:true, minlength : 5, maxlength:200},
    category:{
        type: String,
        required:true,
        enum:['DSA','Web','HLD','LLD','ML']
    },
    tags:{type: Array, validate:{
        validator : function(tags){
           return tags.length > 1
        }
    }},
    creator : {type:String,required:true},
    publishedDate : {type:Date, default:Date.now},
    isPublished: {type:Boolean,required:true},
    rating: {type:Number, required:function(){this.isPublished}} 
})

const Course = mongoose.model('Course', courseSchema)

async function createCourse(){
        const course = new Course({
            name: 'DataScience',
            tags:['express','mongodb'],
            category:'ML',
            creator:'Rao',
            isPublished:true,
            rating:4.5
        });
        try {
            //await course.validate()
            const result = await course.save()
            console.log(result)
        } catch (error) {
            for(field in error.errors){
                console.log(error.errors[field])
            }
            //console.log(error.message)
        }
        
    }
// async function createCourse(){
//     const course = new Course({
//         name: 'Java',
//         creator: 'ABC',
//         isPublished: false,
//         rating: 4.5
//     })
//     const course1 = new Course({
//         name: 'Python',
//         creator: 'Pratt',
//         isPublished: true,
//         rating: 4.3
//     })
//     const course2 = new Course({
//         name: 'Node Js',
//         creator: 'Richard',
//         isPublished: true,
//         rating: 3.8
//     })
//     const result = await course.save()
//     const result1 = await course1.save()
//     const result2 = await course2.save()
//     console.log(result)
//     console.log(result1)
//     console.log(result2)
// }


// eq (equal)
// gt (greater than)
// gte (greater than and equal to)
// lt (less than)
// lte (less than equal to)

// in
// not in
async function getCourses(){
    //const courses = await Course.find({creator:'Arun Rao'}).select({name:1, publishedDate:1}).sort({name:1})
    //const courses = await Course.find({rating:{$gte:4}}).select({name:1, publishedDate:1,rating:1})
    const courses = await Course.find({rating:{$in:[3.8, 4.5, 4.3]}}).select({name:1, publishedDate:1,rating:1}).or([{creator:'ABC',rating:3}])
    console.log(courses)
}

//getCourses()

createCourse()


//update
async function updateCourse(id){
    let course = await Course.findById(id)
    if(!course) return;
    course.name ='Ruby'
    course.creator='Harry'

    const updatedCourse = await course.save()
    console.log(updatedCourse)
}

//updateCourse('63ea6d043d8f914f0b30b865')

// Delete

async function deleteCourse(id){
    //let course = await Course.findByIdAndRemove(id)
    let course = await Course.findByIdAndDelete(id)
    console.log(course)
}

//deleteCourse('63ea7ad7bb8129797e52ac89')