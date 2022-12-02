import React, { Fragment } from "react";
import InputTeacher from "../teachers/InputTeacher";
import ListTeachers from "../teachers/ListTeachers";


const TeachersPage = () => {
    return (
        <Fragment>
            <InputTeacher />
            <ListTeachers />
        </Fragment>
    );
};


export default TeachersPage;