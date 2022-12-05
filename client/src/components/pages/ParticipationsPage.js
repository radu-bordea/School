import React, { Fragment } from "react";
import InputParticipation from "../participations/InputParticipation";
import ListParticipations from "../participations/ListParticipations";

const ParticipationsPage = () => {
  return (
    <Fragment>
      <InputParticipation />
      <ListParticipations />
    </Fragment>
  );
};

export default ParticipationsPage;
