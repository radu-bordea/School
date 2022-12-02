import React, {Fragment, useState} from 'react';

const InpuTeacher = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [title, setTitle] = useState("");

        const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {firstname, lastname, title};
            const response = await fetch("http://localhost:5000/teachers", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/teachers";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
      <Fragment>
        <h1 className="text-center mt-5">Teachers List</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
          <input
            type="text"
            placeholder="first name"
            className="form-control mr-2"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            placeholder="last name"
            className="form-control mr-2"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="text"
            placeholder="title"
            className="form-control mr-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="btn btn-success">Add</button>
        </form>
      </Fragment>
    );
};

export default InpuTeacher;
