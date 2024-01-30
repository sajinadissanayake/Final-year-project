const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const moment = require('moment');

const patientModel = require('./models/patients');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/hospital");

app.get('/', (req, res) => {
    patientModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err));
});



app.get('/getPatient/:id', (req, res) => {
    const id = req.params.id;
    patientModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.put('/updatePatient/:id', (req, res) => {
    const id = req.params.id;

    const formattedDate = moment(req.body.dob).format("YYYY-MM-DD");

    patientModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        dob: formattedDate,
        gender: req.body.gender,
        address: req.body.address,
        maritial:req.body.maritial,
        pnumber: req.body.pnumber,
        moh: req.body.moh,
        phm: req.body.phm,
        phi: req.body.phi,
        gnd: req.body.gnd,
        dsd: req.body.dsd,
        neighbour: req.body.neighbour,
        education: req.body.education,
    })
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    patientModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});
app.post("/AddPatient", (req, res) => {
    console.log(req.body); // Check if the data is being received
    patientModel.create(req.body)
        .then(users => {
            console.log("User created:", users);
            res.json(users);
        })
        .catch(err => {
            console.error("Error creating user:", err);
            res.json(err);
        });
});


app.listen(3001, () => {
    console.log("server is running");
});
