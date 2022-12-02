import React, {Fragment, useEffect, useState} from 'react';
import EditTeacher from './EditTeacher';

const ListTeachers = () => {

    const [teachers, setTeachers] = useState([]);

    // delete a teacher
    const deleteTeacher = async id => {
        try {
            const deleteTeacher = await fetch(`http://localhost:5000/teachers/${id}`, {
                method: "DELETE"
            });
            setTeachers(teachers.filter(teacher => teacher.teacherid !== id ));
        } catch (err) {
            console.error(err.message);
        }
    } 

    // get teachers
    const getTeachers = async() => {
        try {
            const response = await fetch("http://localhost:5000/teachers");
            const jsonData = await response.json();

            setTeachers(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTeachers();
    }, []);

    return (
      <Fragment>
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>Teacher Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.teacherid}>
                <td>{teacher.teacherid}</td>
                <td>{teacher.firstname}</td>
                <td>{teacher.lastname}</td>
                <td>{teacher.title}</td>
                <td>
                  <EditTeacher teacher={teacher} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTeacher(teacher.teacherid)}
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

export default ListTeachers;