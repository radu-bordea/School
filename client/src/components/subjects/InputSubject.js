import React, { Fragment, useState } from "react";

const InputSubject = () => {
  const [subjectname, setSubjectname] = useState("");
  const [teacherid, setTeacherid] = useState("");

  // Register a new Subject
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { subjectname, teacherid };
      const response = await fetch("http://localhost:5000/subjects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/subjects";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Subjects List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="subject name"
          className="form-control mr-2"
          value={subjectname}
          onChange={(e) => setSubjectname(e.target.value)}
        />

        <input
          type="text"
          placeholder="teacher id"
          className="form-control mr-2"
          value={teacherid}
          onChange={(e) => setTeacherid(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputSubject;
