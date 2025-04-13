
import { jsx, css } from "@emotion/react";
import React, { useState } from "react";
import Icon from "../GlobalComponents/Icon";
import scheduleBg from "../Image/scheduleBg.jpg";
import ScheduleLinks from "./ScheduleLinks";
import Table from "./Table";
import Container from "../GlobalComponents/Container";

const Schedule = () => {
  const [hidden, setHidden] = useState(false);
  const [day, setDay] = useState("Monday");

  return (
    <section  className="schedule" id="schedule">
      <h2>
        CLASSES <span>SCHEDULE</span>
      </h2>
      <Icon />
      <p>
        Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra
        <br />
        ipsum dolor, ultricies fermentum massa consequat eu.
      </p>
      <Container>
        <ScheduleLinks setDay={setDay} day={day} />
        <Table day={day} />
      </Container>
    </section>
  );
};



export default Schedule;
