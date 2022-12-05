import React, { Fragment, useState } from "react";

const InputParticipation = () => {
  const [subjectid, setSubjectid] = useState("");
  const [studentid, setStudentid] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { subjectid, studentid};
      const response = await fetch("http://localhost:5000/participations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/participations";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Participations List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="subject id"
          className="form-control mr-2"
          value={subjectid}
          onChange={(e) => setSubjectid(e.target.value)}
        />
        <input
          type="text"
          placeholder="student id"
          className="form-control mr-2"
          value={studentid}
          onChange={(e) => setStudentid(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputParticipation;
