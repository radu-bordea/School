import React, { Fragment, useEffect, useState } from "react";
import '../../App.css'

const ListSubjectsIdName = ({subjects, setSubjectId}) => {
  return (
    <Fragment>
      <table className="table text-left">
        <thead>
        </thead>
        <tbody className="subjectsTable1">
          {subjects.map((subject) => (
            <tr key={subject.subjectid}>
              <td>
                <button className="btn btnTry btn-info w-100" onClick={() => setSubjectId(subject.subjectid)}>
                  {subject.subjectid} | {subject.subjectname}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListSubjectsIdName;
