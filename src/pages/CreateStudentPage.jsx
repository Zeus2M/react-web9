import React from "react";
import "./CreateStudentPage.css";
import { useFormik } from "formik";
import { number, object, string } from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Navcomponent from "../Components/Navcomponent";


const CreateStudentPage = () => {
  const navigate = useNavigate();
  const studentValidationSchema = object({
    firstname: string().required(),
    lastname: string().required(),
    age: number().required(),
    bio: string().required().max(150),
    skilltitle: string().required(),
    gender: string().required(),
    image: string().required(),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      age: 0,
      bio: "",
      skilltitle: "",
      gender: "",
      image: "",
    },
    onSubmit: (newStudent) => {
      alert("submitted");
      console.log("submitted");
      addStudent(newStudent);
    },
    validationSchema: studentValidationSchema,
  });

  const addStudent = (newStudent) => {
    alert("clicked");
    fetch(`https://691aef532d8d78557570c53e.mockapi.io/api/v1/students/`, {
      method: "POST",
      body: JSON.stringify(newStudent),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => console.log(data));

    toast.success("Student created successfully!");
    navigate("/");
  };

  return (
    <div className="create-student-page">
      <Navcomponent />
      <main>
        <form onSubmit={formik.handleSubmit}>
          <h4>Create New Student</h4>
          <div className="form-group">
            <label>First Name:</label>

            <input
              name="firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="First Name"
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <p className="error">{formik.errors.firstname}</p>
            ) : null}
          </div>

          <div className="form-group">
            <label>Last Name:</label>
            <input
              name="lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Last Name"
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <p className="error">{formik.errors.lastname}</p>
            ) : null}
          </div>

          <div className="form-group">
            <label>Gender:</label>
            <select
              name="gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {formik.touched.gender && formik.errors.gender ? (
              <p className="error">{formik.errors.gender}</p>
            ) : null}
          </div>
          <div className="form-group">
            <label>Skill Title:</label>
            <input
              name="skilltitle"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Skill Title"
            />
            {formik.touched.skilltitle && formik.errors.skilltitle ? (
              <p className="error">{formik.errors.skilltitle}</p>
            ) : null}
          </div>
          
          <div className="form-group">
            <label>Age:</label>
            <input
              name="age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              placeholder="Age"
            />
            {formik.touched.age && formik.errors.age ? (
              <p className="error">{formik.errors.age}</p>
            ) : null}
          </div>
          <div className="form-group">
            <label>Bio:</label>

            <textarea
              name="bio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Bio"
            />
            {formik.touched.bio && formik.errors.bio ? (
              <p className="error">{formik.errors.bio}</p>
            ) : null}
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input
              name="image"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              placeholder="Image URL"
            />
            {formik.touched.image && formik.errors.image ? (
              <p className="error">{formik.errors.image}</p>
            ) : null}
          </div>
          <button type="submit" className="submit-update-button">
            Create Student
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreateStudentPage;