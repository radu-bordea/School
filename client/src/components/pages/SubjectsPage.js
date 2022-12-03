import React, { Fragment } from 'react';
import InputSubject from '../subjects/InputSubject';
import ListSubjects from '../subjects/ListSubjects';

const SubjectsPage = () => {
    return (
        <Fragment>
            <InputSubject/>
            <ListSubjects/>
        </Fragment>
    );
};

export default SubjectsPage;