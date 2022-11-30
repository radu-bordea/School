import React, {Fragment, useEffect, useState} from 'react'

const ListStudents = () => {

    const [students, setStudents] = useState([]);

    // delete student function

    const deleteStudent = async id => {
        try {
            const deleteStudent = await fetch(`http://localhost:5000/students/${id}`,{
                method: "DELETE"
            });
            setStudents(students.filter(student => student.studentid !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getStudents = async() => {
        try {
            
            const response = await fetch("http://localhost:5000/students");
            const jsonData = await response.json();

            setStudents(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getStudents();
    }, []);

    return (
      <Fragment>
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date Of Birth</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
{/*             <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr> */}
            {students.map(student => (
                <tr key={student.studentid}>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.dateofbirth}</td>
                    <td>Edit</td>
                    <td><button className='btn btn-danger' onClick={() => deleteStudent(student.studentid)}>Delete</button></td>
                </tr>
            ))}

          </tbody>
        </table>
      </Fragment>
    );
};

export default ListStudents;