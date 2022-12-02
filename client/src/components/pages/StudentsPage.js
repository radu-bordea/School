import React, { Fragment } from 'react';
import InputStudent from "../students/InputStudent";
import ListStudents from "../students/ListStudents";

const StudentsPage = () => {
    return (
      <Fragment>
        <InputStudent />
        <ListStudents />
      </Fragment>
    );
};

export default StudentsPage;