const express = require('express')
const router = express.Router()

const { Student, validate } = require('../models/studentModel')


router.get('/', async (req, res) => {
    let students = await Student.find()
    res.send(students);
});

//To Create
router.post('/', async (req, res) => {
    const { error } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const student = new Student({
        name: req.body.name,
        isEnrolled: req.body.isEnrolled,
        PhoneNumber: req.body.PhoneNumber
    });
    await student.save();
    res.send(student);
});

// To update
router.put('/:id', async (req, res) => {
    const { error } = validate(req.body)
    if (error) res.status(400).send(error.details[0].message)
    const student = await Student.findByIdAndUpdate(req.params.id, { name: req.body.name, PhoneNumber: req.body.PhoneNumber, isEnrolled: req.body.isEnrolled }, { new: true })
    if (!student) return res.status(404).send('The student with the given id is not found')
    res.send(student)
});

router.delete('/:id', async (req, res) => {
    const student = await Student.findByIdAndRemove(req.params.id)
    if (!student) return res.status(404).send('The student with the given id was not found')
    res.send(student)
});

router.get('/:id', async (req, res) => {
    const student = await Student.findById(req.params.id)
    if (!student) return res.status(404).send('The student with the given id was not found')
    res.send(student)
});



module.exports = router