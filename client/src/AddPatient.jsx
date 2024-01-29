import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function AddPatient() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const [dob, setdob] = useState()
    const [address, setaddress] = useState()
    const [pnumber, setpnumber] = useState()
    const [moh, setmoh] = useState()
    const [phm, setphm] = useState()
    const [phi, setphi] = useState()
    const [gnd, setgnd] = useState()
    const [dsd, setdsd] = useState()
    const [neighbour, setneighbour] = useState() 
   



    const navigate = useNavigate()

   const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/AddPatient", { name, email, age, dob, address, pnumber, moh, phm, phi, gnd, dsd, neighbour })
    .then(result => {
        console.log(result);
        navigate('/');
    })
    .catch(err => console.log(err));

   }

  return (
    <div>
        <div>
            <form onSubmit={Submit}>
                <h2>Add User</h2>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" name="name" onChange={(e) => setName(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" name="email"
                    onChange={(e) => setEmail(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="Enter Age" name="age"
                    onChange={(e) => setAge(e.target.value)}/><br/>
                </div>
                
                <div>
                 <label htmlFor="">DOB</label>

                <input
                    type="date"
                    placeholder="Enter dob"
                    value={dob ? dob.split('T')[0] : ''}  // Extracting the date part
                    onChange={(e) => setdob(e.target.value)}
                />


                </div>
                
               
                <div>
                    <label htmlFor="">Address</label>
                    <input type="text"  name="address"
                    onChange={(e) => setaddress(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="">Contact Number</label>
                    <input type="text"  name="pnumber"
                    onChange={(e) => setpnumber(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="">MOH area</label>
                    <input type="text"  name="moh"
                    onChange={(e) => setmoh(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="">PHM area</label>
                    <input type="text"  name="phm"
                    onChange={(e) => setphm(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="">PHI area</label>
                    <input type="text"  name="phi"
                    onChange={(e) => setphi(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="">Grama Niladhari Division</label>
                    <input type="text"  name="gnd"
                    onChange={(e) => setgnd(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="">Divisiona secratariat division</label>
                    <input type="text"  name="dsd"
                    onChange={(e) => setdsd(e.target.value)}/><br/>
                </div>
                <div>
                    <label htmlFor="">Whom to infrom during an emergency </label>
                    <input type="text"  name="neighbour"
                    onChange={(e) => setneighbour(e.target.value)}/><br/>
                </div>

                

                <button type="submit">Submit</button>
            </form>
        </div>

    </div>
  )
}

export default AddPatient;