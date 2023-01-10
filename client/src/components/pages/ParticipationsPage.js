import React, { Fragment, useState, useEffect } from "react";
import InputParticipation from "../participations/InputParticipation";
import ListParticipations from "../participations/ListParticipations";
import ListSubjectsIdName from "../subjects/ListSubjectsIdName";


/* This is The Component for The Course Registration
The admin can register students to the available 
courses and visualize the students by the course name */
const ParticipationsPage = () => {

  const [subjects, setSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState(0); 

/** Fetching the students */
  const getSubjects = async () => {
     try {
       const response = await fetch("http://localhost:5000/subjects");
       const jsonData = await response.json();
       setSubjects(jsonData);
     } catch (err) {
       console.error(err.message);
     }
   };

    // get students
    useEffect(() => {
      getSubjects();
    }, []);

  return (
    <Fragment>
      <div className="container">
        <InputParticipation className="row" />
        <div className="row mt-3">
          <div className="col-4">
            <ListSubjectsIdName
              subjects={subjects}
              setSubjectId={setSubjectId}
            />
          </div>
          <div className="col-7">
            <ListParticipations subjectId={subjectId}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ParticipationsPage;
