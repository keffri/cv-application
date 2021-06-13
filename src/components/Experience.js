import { useState } from "react";

const Experience = () => {
  const [editMode, setEditMode] = useState(true);
  const [job, setJob] = useState({
    jobName: "",
    jobPosition: "",
    jobStart: "",
    jobEnd: "",
    jobDescription: "",
  });
  const [experience, setExperience] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="experience">
      <header className="experienceHeader">
        <h1 className="experienceTitle">Experience</h1>
        {editMode ? (
          <button onClick={() => setEditMode(!editMode)}>Save</button>
        ) : (
          <button onClick={() => setEditMode(!editMode)}>Edit</button>
        )}
      </header>
      {editMode && (
        <form className="experienceForm">
          <div>
            <input
              required
              type="text"
              value={job.jobName}
              onChange={(e) =>
                setJob((state) => ({
                  ...state,
                  jobName: e.target.value,
                }))
              }
            />
            <input
              required
              type="text"
              value={job.jobPosition}
              onChange={(e) =>
                setJob((state) => ({
                  ...state,
                  jobPosition: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <input
              required
              type="date"
              value={job.jobStart}
              onChange={(e) =>
                setJob((state) => ({
                  ...state,
                  jobStart: e.target.value,
                }))
              }
            />
            <input
              required
              type="date"
              value={job.jobEnd}
              onChange={(e) =>
                setJob((state) => ({
                  ...state,
                  jobEnd: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="5"
              value={job.jobDescription}
              onChange={(e) =>
                setJob((state) => ({
                  ...state,
                  jobDescription: e.target.value,
                }))
              }
            ></textarea>
          </div>
          <div>
            <button>Add</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Experience;
