import React, {Fragment, useState} from 'react';

const InputStudent = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");

    const onSubmitForm = async e => {
        try {
            const body = {firstname, lastname, dateofbirth};
            const response = await fetch("http://localhost:5000/students", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/students";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
      <Fragment>
        <h1 className="text-center mt-5">Students List</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
          <input
            type="text"
            placeholder="first name"
            className="form-control mr-2"
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
          />
          <input
            type="text"
            placeholder="last name"
            className="form-control mr-2"
            value={lastname}
            onChange={e => setLastname(e.target.value)}
          />
          <input
            type="text"
            placeholder="date of birth"
            className="form-control mr-2"
            value={dateofbirth}
            onChange={e => setDateofbirth(e.target.value)}
          />
          <button className="btn btn-success">Add</button>
        </form>
      </Fragment>
    );
};

export default InputStudent;
