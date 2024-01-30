import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

//update dob is not working
function UpdatePatient() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const [dob, setdob] = useState('');
    const [gender, setGender] = useState('');

    const [address, setAddress] = useState('');
    const [maritial, setMaritial] = useState('');
    const [pnumber, setPnumber] = useState('');

    const [moh, setMoh] = useState('');
    const [phm, setPhm] = useState('');
    const [phi, setPhi] = useState('');
    const [gnd, setGnd] = useState('');

    const [dsd, setDsd] = useState('');
    const [neighbour, setNeighbour] = useState('');
    const [education, setEducation] = useState('');
    



    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getPatient/' + id)
            .then(result => {
                console.log(result);
                setName(result.data.name);
                setEmail(result.data.email);
                setAge(result.data.age);
                setdob(result.data.dob);
                setGender(result.data.gender);
                
                setAddress(result.data.address);
                setMaritial(result.data.maritial);
                setPnumber(result.data.pnumber); 
                setMoh(result.data.moh);
                setPhm(result.data.phm);
                setPhi(result.data.phi);
                setGnd(result.data.gnd);
                setDsd(result.data.dsd);
                setNeighbour(result.data.neighbour);
                setEducation(result.data.education);
              
                
            })
            .catch(err => console.log(err));
    }, []);

    const patientUpdate = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/UpdatePatient/" + id, { name, email, age,dob,gender ,address, maritial,  pnumber, moh, phm ,phi, gnd, dsd, neighbour, education})
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
                <div>
                <input
                    type="date"
                    placeholder="Enter dob"
                    value={dob ? dob.split('T')[0] : ''}  // Extracting the date part
                    onChange={(e) => setdob(e.target.value)}
                />
                </div>
              
                
                
                <div>
                <label htmlFor="">Gender</label>
                <div>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={() => setGender("male")}
                    />
                    <label htmlFor="male">Male</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={() => setGender("female")}
                    />
                    <label htmlFor="female">Female</label>
                </div>
            </div>
                
                 <div>
                    <label htmlFor="address">address</label>
                   
                    <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)}/><br/>
                </div>

                <div>
                <label htmlFor="">Maritial status</label>
                <div>
                    <input
                        type="radio"
                        id="married"
                        name="maritial"
                        value="married"
                        checked={maritial === "married"}
                        onChange={() => setMaritial("married")}
                    />
                    <label htmlFor="married">married</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="unmarried"
                        name="maritial"
                        value="unmarried"
                        checked={maritial === "unmarried"}
                        onChange={() => setMaritial("unmarried")}
                    />
                    <label htmlFor="unmarried">unmarried</label>
                </div>
            </div>
              
                <div>
                    <div>
                    <label htmlFor="pnumber">pnumber</label>
                   
                    <input type="text" name="pnumber" value={pnumber} onChange={(e) => setPnumber(e.target.value)}/><br/>
                </div>
                </div>
                
                    <div>
                    <label htmlFor="moh">MOH</label>
                   
                    <input type="text" name="moh" value={moh} onChange={(e) => setMoh(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label htmlFor="phm">PHM</label>
                   
                        <input type="text" name="phm" value={phm} onChange={(e) => setPhm(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label htmlFor="phi">PHI</label>
                   
                        <input type="text" name="phi" value={phi} onChange={(e) => setPhi(e.target.value)}/><br/>
                    </div>

                    <div>
                        <label htmlFor="gnd">GND</label>
                   
                        <input type="text" name="gnd" value={gnd} onChange={(e) => setGnd(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label htmlFor="dsd">DSD</label>
                   
                        <input type="text" name="dsd" value={dsd} onChange={(e) => setDsd(e.target.value)}/><br/>
                    </div>
                    <div>
                        <label htmlFor="dsd">Neighbour</label>
                   
                        <input type="text" name="neighbour" value={neighbour} onChange={(e) => setNeighbour(e.target.value)}/><br/>
                    </div>

                    
            <div>
                <label htmlFor="">Education</label>
                <div>
                    <input
                        type="radio"
                        id="primary"
                        name="education"
                        value="primary"
                        checked={education === "primary"}
                        onChange={() => setEducation("primary")}
                    />
                    <label htmlFor="">primary</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="secondary"
                        name="education"
                        value="secondary"
                        checked={education === "secondary"}
                        onChange={() => setEducation("secondary")}
                    />
                    <label htmlFor="">secondary</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="olevel"
                        name="education"
                        value="olevel"
                        checked={education === "olevel"}
                        onChange={() => setEducation("olevel")}
                    />
                    <label htmlFor="">olevel</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="alevel"
                        name="education"
                        value="alevel"
                        checked={education === "alevel"}
                        onChange={() => setEducation("alevel")}
                    />
                    <label htmlFor="">alevel</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="degree"
                        name="education"
                        value="degree"
                        checked={education === "degree"}
                        onChange={() => setEducation("degree")}
                    />
                    <label htmlFor="">degree</label>
                </div>
            </div>

                <button>Update</button>
            </form>
        </div>
    );
}

export default UpdatePatient;
