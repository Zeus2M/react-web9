import React, { useEffect, useState } from "react";
import "./StudentPage.css";
import { data, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Navcomponent from "../Components/Navcomponent";

const StudentPage = () => {
  ///students/:id

  const { studentId } = useParams();
  console.log("this is the student id", studentId);

    const [student, setStudent] = useState({});
    const [displayUpdateForm, setDisplayUpdateForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const studentsGetter = () => {
      fetch(
        `https://691aef532d8d78557570c53e.mockapi.io/api/v1/students/${studentId}`
      )
        .then((data) => data.json())
        .then((data) => {
          setStudent(data);
          console.log("this is the student data", data);
        });
    };

    studentsGetter();
  }, []);

  const deleteStudent = (id) => {
    fetch(`https://691aef532d8d78557570c53e.mockapi.io/api/v1/students/${id}`, {
      method: "DELETE",
    }).then((data) => data.json());

    toast.success("Student deleted successfully!");

    navigate("/");
  };

  const updateStudent = (e) => {
    e.preventDefault();

      fetch(`https://691aef532d8d78557570c53e.mockapi.io/api/v1/students/${student.id}`,
          {
      method: "PUT",
              body: JSON.stringify(student),
              headers: {
                    "Content-Type": "application/json"
              }
    }).then((data) => data.json()).then(data=>console.log(data));

    toast.success("Student details updated successfully!");
  };

  return (
    <div className="student-page">
      <Navcomponent />

      <main>
        <div>Student profile</div>

        <div className="profile-wrapper">
          <section>
            <img src={student.image} alt="student-image" />

            <h3>
              {student.firstname} {student.lastname}
            </h3>
            <p>Bio: {student.bio}</p>

            <p>Skill Title: {student.skilltitle}</p>

            <p>Age: {student.age}</p>

            <div className="button-group">
                          <button
                              onClick={()=>setDisplayUpdateForm(!displayUpdateForm)}
              
                              className="update-button">Update Details</button>

              <button
                className=" delete-button update-button"
                onClick={() => deleteStudent(student.id)}
              >
                Delete Student
              </button>
            </div>
                  </section>
                  
                  {
                      displayUpdateForm &&
                

          <form onSubmit={updateStudent}>
            <h4>Update Student Details</h4>
            <div className="form-group">
              <label>First Name:</label>

              <input
                value={student.firstname}
                onChange={(e) =>
                  setStudent({ ...student, firstname: e.target.value })
                }
                type="text"
                placeholder="First Name"
              />
            </div>

            <div className="form-group">
              <label>Last Name:</label>
              <input
                value={student.lastname}
                onChange={(e) =>
                  setStudent({ ...student, lastname: e.target.value })
                }
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <label>Skill Title:</label>
              <input
                value={student.skilltitle}
                onChange={(e) =>
                  setStudent({ ...student, skilltitle: e.target.value })
                }
                type="text"
                placeholder="Skill Title"
              />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input
                value={student.age}
                onChange={(e) =>
                  setStudent({ ...student, age: e.target.value })
                }
                type="number"
                placeholder="Age"
              />
            </div>
            <div className="form-group">
              <label>Bio:</label>

              <textarea
                value={student.bio}
                onChange={(e) =>
                  setStudent({ ...student, bio: e.target.value })
                }
                type="text"
                placeholder="Bio"
              />
            </div>
            <div className="form-group">
              <label>Image URL:</label>
              <input
                value={student.image}
                onChange={(e) =>
                  setStudent({ ...student, image: e.target.value })
                }
                type="text"
                placeholder="Image URL"
              />
            </div>
            <button className="submit-update-button">Submit Updates</button>
                      </form>
                  
                    }
        </div>
      </main>
    </div>
  );
};

export default StudentPage;