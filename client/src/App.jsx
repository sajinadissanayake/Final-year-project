import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientsPg from './patientspg'
import AddPatient from './addpatient'
import UpdatePatient from './UpdatePatient'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PatientsPg />}></Route>
        <Route path='/add' element={<AddPatient />}></Route>
        <Route path='/updatepatient/:id' element={<UpdatePatient />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
