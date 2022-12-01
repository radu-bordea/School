import React, {Fragment, useState} from 'react';

const EditStudent = ({student}) => {
    
    const [firstname, setFirstname] = useState(student.firstname);
    const [lastname, setLastname] = useState(student.lastname);
    const [dateofbirth, setDateofbirth] = useState(student.dateofbirth.slice(0, 10));

    // edit description function
    const updateStudent = async(e) => {
        e.preventDefault();
        try {
            const body = {firstname, lastname, dateofbirth};
            const response = await fetch(`http://localhost:5000/students/${student.studentid}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/students";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
      <Fragment>
        <button
          type="button"
          className="btn btn-warning"
          data-toggle="modal"
          data-target={`#id${student.studentid}`}
        >
          Edit
        </button>

        <div className="modal text-dark" id={`id${student.studentid}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Student</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <label>Student ID: {student.studentid}</label>
                <input
                  type="text"
                  className="form-control mt-2"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  value={dateofbirth}
                  onChange={(e) => setDateofbirth(e.target.value)}
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-dismiss="modal"
                  onClick={e => updateStudent(e)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
};

export default EditStudent;