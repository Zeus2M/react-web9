
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreateStudentPage from './pages/CreateStudentPage'
import Error404Page from './pages/Error404Page'
import Homepage from './pages/Homepage'
import StudentPage from './pages/StudentPage'

function App() {
  

  return (
       
    <Routes>
        <Route  path='/' element={<Homepage />}/>
        <Route  path="/students/:studentId" element={<StudentPage />} />
        <Route path="/create-student" element={<CreateStudentPage/>}/>
        <Route path="*" element={<Error404Page/>}/> 
    </Routes>

  )
}

export default App
