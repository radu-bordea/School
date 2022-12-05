import React, { Fragment, useEffect, useState } from "react";

// import EditParticipation from "./EditParticipations";

const ListParticipations = () => {
  const [participations, setParticipations] = useState([]);

//  delete student function
    const deleteParticipation = async (id) => {
    try {
      const deleteParticipation = await fetch(
        `http://localhost:5000/participations/${id}`,
        {
          method: "DELETE",
        }
      );
      setParticipations(participations.filter((p) => p.subjectid !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  // get students
  const getParticipations = async () => {
    try {
      const response = await fetch("http://localhost:5000/participations");
      const jsonData = await response.json();

      setParticipations(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getParticipations();
  }, []);

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Subject Id</th>
            <th>Subject Name</th>
            <th>Student id</th>
            <th>Student First Name</th>
            <th>Student Last Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {participations.map((p) => (
            <tr key={p.subjectid}>
              <td>{p.subjectid}</td>
              <td>{p.subjectname}</td>
              <td>{p.studentid}</td>
              <td>{p.firstname}</td>
              <td>{p.lastname}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteParticipation(p.subjectid)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListParticipations;
