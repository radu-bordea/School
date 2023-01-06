import React, { Fragment, useState, useEffect } from "react";
import "../../App.css";

// import EditParticipation from "./EditParticipations";

const ListParticipations = ({ subjectId }) => {
  const [participations, setParticipations] = useState([]);
  let value = 0;

  const getParticipations = async () => {
    try {
      const response = await fetch(`http://localhost:5000/participations`);
      const jsonData = await response.json();

      for (const iterator of jsonData) {
        console.log(iterator.subjectid);
      }

      setParticipations(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteParticipation = async (id) => {
    try {
      const deleteParticipation = await fetch(
        `http://localhost:5000/participations/${id}`,
        {
          method: "DELETE",
        }
      );
      setParticipations(participations.filter((p) => p.studentid !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getParticipations();
  }, []);

  return (
    <div className="containerT">
      {participations.map((p) => (
        <div key={value++}>
          {p.subjectid == subjectId && (
            <div className="row p-2 mt-1 mr-3 text-light studentsLine">
              <span className="col-8">
                {p.studentid} | {p.firstname} {p.lastname}
              </span>
              <span className="col-3">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteParticipation(p.studentid)}
                >
                  Delete
                </button>
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListParticipations;
