import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Navcomponent from '../Components/Navcomponent';
import StudentCard from '../Components/StudentCard';



const Homepage = () => {
    
//   API endpoint
// https://691aef532d8d78557570c53e.mockapi.io/api/v1/:endpoint


    const [students, setStudents] = useState([]);
    useEffect(() => {

        const studentsGetter = () => {
        fetch("https://691aef532d8d78557570c53e.mockapi.io/api/v1/students")
            .then(data => data.json())
            .then(data => {

                setStudents(data);     
                console.log(data);
            });
    };

         studentsGetter();
        
    },[])
  return (
    <div className='homepage'>
        <Navcomponent />

        <main>
            <div className='hero'>
                  <h4>Welcome to CPISM5 Students details page</h4>
                  <p>
                      This web application contains the details of all the students enrolled in CPISM5 batch.
                  </p>

            </div>
               
               <div className='all-students-display'>
                   <h5>All Students Details will be displayed here</h5>

                   <div className="students-card-wrapper">

                    {
                        students.map((student, index) => (
                               <StudentCard studentData={student} />
                        ))
                    }
                   </div>
               </div>
        </main>
    </div>
  )
}

export default Homepage