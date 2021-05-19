import React from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

class Resume extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="resumeContainer">
        <div className="resume">
          <General />
          <Education />
          <Experience />
        </div>
      </div>
    );
  }
}

export default Resume;
