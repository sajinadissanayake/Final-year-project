import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function UpdatePatient() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getPatient/' + id)
            .then(result => {
                console.log(result);
                setName(result.data.name);
                setEmail(result.data.email);
                setAge(result.data.age);
            })
            .catch(err => console.log(err));
    }, []);

    const patientUpdate = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/UpdatePatient/" + id, { name, email, age })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <form onSubmit={patientUpdate}>
                <h2>Update User</h2>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="text" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
                </div>
                <button>Update</button>
            </form>
        </div>
    );
}

export default UpdatePatient;
