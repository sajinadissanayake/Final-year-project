import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientsPg from './PatientsPg'
import AddPatient from './AddPatient'
import UpdatePatient from './UpdatePatient'
import PatientList from './PatientList'
import OnePatient from './OnePatient'
import AddReports from './AddReports'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PatientsPg />}></Route>
        <Route path='/add' element={<AddPatient />}></Route>
        <Route path='/updatepatient/:id' element={<UpdatePatient />}></Route>
        <Route path='/plist' element={<PatientList />}></Route>
        <Route path='/patient' element={<OnePatient />}></Route>
        <Route path='/addreports' element={<AddReports />}></Route>
       
        

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
