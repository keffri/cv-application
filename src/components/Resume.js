import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

const Resume = () => {
  return (
    <div className="resumeContainer">
      <div className="resume">
        <General />
        <Education />
        <Experience />
      </div>
    </div>
  );
};

export default Resume;
