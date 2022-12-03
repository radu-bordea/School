import React, { Fragment, useState } from "react";

const EditSubject = ({ subject }) => {
  const [subjectname, setSubjectname] = useState(subject.subjectname);
  const [teacherid, setTeacherid] = useState(subject.teacherid);

  // edit updateSubject function
  const updateSubject = async (e) => {
    e.preventDefault();
    try {
      const body = { subjectname, teacherid };
      const response = await fetch(
        `http://localhost:5000/subjects/${subject.subjectid}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/subjects";
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
        data-target={`#id${subject.subjectid}`}
      >
        Edit
      </button>

      <div className="modal text-dark" id={`id${subject.subjectid}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Subject</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <label>Subject ID: {subject.subjectid}</label>
              <input
                type="text"
                className="form-control mt-2"
                value={subjectname}
                onChange={(e) => setSubjectname(e.target.value)}
              />

              <input
                type="text"
                className="form-control mt-2"
                value={teacherid}
                onChange={(e) => setTeacherid(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateSubject(e)}
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

export default EditSubject;
