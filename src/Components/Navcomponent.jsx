import React from 'react'
import "./Navcomponent.css"
import { Link, useNavigate } from 'react-router-dom'
const Navcomponent = () => {
    const navigate = useNavigate();
  return (
      <nav className='nav-component'>
      <h2>
        <Link to="/">CPISM5StudentsApp</Link>
          
          </h2>


          <div className='button-flex'>
              <button onClick={()=>navigate('/create-student')}>Create Student</button>
          </div>
    </nav>
  )
}

export default Navcomponent