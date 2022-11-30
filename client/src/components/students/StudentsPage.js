import React, {Fragment} from 'react';
import InputStudent from "./InputStudent";
import ListStudents from "./ListStudents";

const StudentsPage = () => {
    return (
      <Fragment>
        <InputStudent />
        <ListStudents />
      </Fragment>
    );
};

export default StudentsPage;