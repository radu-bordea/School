import React, {Fragment, useEffect, useState} from 'react'

import EditSubject from './EditSubject';

const ListSubjects = () => {

    const [subjects, setSubjects] = useState([]);

    // delete subject function
    const deleteSubject = async id => {
        try {
            const deleteSubject = await fetch(`http://localhost:5000/subjects/${id}`,{
                method: "DELETE"
            });
            setSubjects(subjects.filter(subject => subject.subjectid !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    // get subjects
    const getSubjects = async() => {
        try {
            
            const response = await fetch("http://localhost:5000/subjects");
            const jsonData = await response.json();

            setSubjects(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getSubjects();
    }, []);

    return (
      <Fragment>
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>Subject Id</th>
              <th>Subject Name</th>
              <th>Teacher id</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.subjectid}>
                <td>{subject.subjectid}</td>
                <td>{subject.subjectname}</td>
                <td>{subject.teacherid}</td>
                <td>
                  <EditSubject subject={subject} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteSubject(subject.subjectid)}
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

export default ListSubjects;