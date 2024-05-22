
import React from "react";

export default function Resume({ name, phone, projects, skills, experience, email }) {

  return (
    <>
      {/* <div className="modal  modal-lg fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-keyboard="false">
        <div className="modal-dialog w-100">
          <div className="modal-content" >
            <div className="modal-header">
              <h1 className="modal-title fs-5 " id="exampleModalLabel">Resume</h1>
              {/* <button type="button" classNameName="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  {/* <div className="col-md-1"></div> */}
                  <div className="col-md-6" style={{ backgroundColor: "orange" }}>
                    <h1 className="mt-3" id="nameT1">{name}</h1>
                    {/* <p>Web developer</p> */}
                    <p className="fs-5 mt-5">Summary</p>
                    <hr></hr>
                    <p className="mb-5" style={{ textAlign: "justify" }}>Driven and detail-oriented software engineer with a passion for creating efficient and user-friendly applications. Adept at collaborating with cross-functional teams to deliver high-quality solutions that meet business objectives. </p>
                    <p className="fs-5">CONTACT</p>
                    <hr></hr>
                    <ul>
                      {/* <li>{phone}</li><br></br>
                      <li>{email}</li><br></br> */}
                     <p>{phone}</p> <br></br>
                      <p> {email}</p>

                    </ul>

                  </div>
                  <div className="col-md-6 border border-3 border-dark-subtle">
                    <p className="fs-2 mt-5">Professional Experience</p>
                    <hr style={{ backgroundColor: "orange" }}></hr>
                    {/* <h2 className="fs-4">Digital Marketing</h2> */}
                    {/* <p>triangle flow of teh year</p> */}
                    {/* <ul> */}

                    {experience}
                    {/* <li>Lorem ipsum dolor sit amet consectetur</li>
                      <li>Lorem ipsum dolor sit amet consectetur</li> */}
                    {/* </ul> */}
                    <p className="fs-2 mt-5">Projects</p>
                    <hr style={{ backgroundColor: "orange" }}></hr>
                    {/* <h2 className="fs-4">Digital Creator</h2> */}
                    {/* <p>triangle flow of teh year</p> */}
                    {projects}
                    {/* <ul>
                      <li></li>
                    </ul> */}
                    <p className="fs-2 mt-5">Skills</p>
                    <hr></hr>
                    {skills}
                    {/* <ul> */}
                    {/* <li></li> */}
                    {/* <br>
                      </br>
                    </ul> */}
                  </div>
                  {/* <div className="col-md-1"></div> */}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
