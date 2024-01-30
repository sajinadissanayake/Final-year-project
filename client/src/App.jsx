import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientsPg from './PatientsPg'
import AddPatient from './AddPatient'
import UpdatePatient from './UpdatePatient'
import PatientList from './patientlist';



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

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
