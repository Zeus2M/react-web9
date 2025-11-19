import React from 'react'
import "./StudentCard.css" 
import { Link } from 'react-router-dom'

const StudentCard = (props) => {
  return (
    <div className="class-component-body">
        <img
         src={props.studentData.image}
         alt="user-headshot"
         />
         <div className="card-content">
            <h3>
                {props.studentData.firstname}
                {
                    " "
                }
                {
                    props.studentData.lastname
                }
            </h3>
            <p>{props.studentData.skilltitle}</p>
            <button>
                <Link to={`/students/${props.studentData.id}`}>
                       Visit my profile
                </Link>
            </button>
         </div>

    </div>
  )
}

export default StudentCard