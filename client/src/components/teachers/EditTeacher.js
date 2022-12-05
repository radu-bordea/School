import React, {Fragment, useState} from 'react';


const EditTeacher = ({teacher}) => {
  const [firstname, setFirstname] = useState(teacher.firstname);
  const [lastname, setLastname] = useState(teacher.lastname);
  const [title, setTitle] = useState(teacher.title);

  // edit updateTeacher function
  const updateTeacher = async (e) => {
    e.preventDefault();
    try {
      const body = { firstname, lastname, title };
      const response = await fetch(`http://localhost:5000/teachers/${teacher.teacherid}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/teachers";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${teacher.teacherid}`}
      >
        Edit
      </button>

      <div className="modal text-dark" id={`id${teacher.teacherid}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Teacher</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <h4>Teacher ID: {teacher.teacherid}</h4><br />
              <span>First Name</span>
              <input
                type="text"
                className="form-control mt-2"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                />
              <span>Last Name</span>
              <input
                type="text"
                className="form-control mt-2"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                />
              <span>Title</span>
              <input
                type="text"
                className="form-control mt-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateTeacher(e)}
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

export default EditTeacher;
