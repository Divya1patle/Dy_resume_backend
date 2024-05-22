import React, { useState } from 'react';
import Resume from './resume_temp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal } from 'bootstrap';
// import { json } from 'body-parser';

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [projects, setProjects] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'projects':
        setProjects(value);
        break;
      case 'skills':
        setSkills(value);
        break;
      case 'experience':
        setExperience(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const generateCv = () => {
    if (!name || !phone || !email) {
      setFormError('Please fill out all required fields');
      return;
    }
    const data = {
      'name': name,
      'contactInfo': phone,
      'projectURL': projects,
      'skills': skills,
      'experience': experience,
      'email': email,
    }
    console.log(data)
    setData(data)

    const modalElement = document.getElementById('exampleModal');
    const modal = new Modal(modalElement, { backdrop: false });
    // modal.show();
  };

  const setData = (data) => {
    fetch('http://localhost:8080/resume', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)

    }).then((res) => {
      alert(res);
    }).catch((error) => {
      alert(error);
    })
  }

  return (
    <div className="container mb-5 mt-3" >
      <h1 className="text-center">Resume Generator</h1>

      <form className="mt-5">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="phone" className="form-label">Contact information</label>
            <input
              type="number"
              className="form-control"
              placeholder="Phone no"
              name="phone"
              value={phone}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="projects" className="mt-5">Projects</label>
            <textarea
              className="form-control"
              rows="3"
              id="projects"
              name="projects"
              value={projects}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="col-md-6">
            <label htmlFor="skills" className="form-label">Skills</label>
            <textarea
              rows="3"
              className="form-control"
              id="skills"
              name="skills"
              value={skills}
              onChange={handleInputChange}
            ></textarea>

            <label htmlFor="experience" className="mt-4">Experience</label>
            <textarea
              className="form-control"
              rows="3"
              id="experience"
              name="experience"
              value={experience}
              onChange={handleInputChange}
            ></textarea>
          </div>
          {formError && <div className="alert alert-danger mt-3">{formError}</div>}
        </div>
      </form>
      <div className="text-center mt-5">
        <button type="button" className="btn btn-primary btn-lg" onClick={generateCv}>Submit</button>
      </div>
      <Resume name={name} phone={phone} projects={projects} skills={skills} experience={experience} email={email} />
    </div>
  );
}

export default App;
