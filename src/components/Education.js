import { useState } from "react";
import uniqid from "uniqid";
import EducationData from "./EducationData";

const Education = () => {
  const [editMode, setEditMode] = useState(true);
  const [educationList, setEducationList] = useState([]);
  const [education, setEducation] = useState({
    start: "",
    end: "",
    school: "",
    course: "",
    key: "",
  });

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEducationList((state) => [...state, education]);
    setEducation({
      start: "",
      end: "",
      school: "",
      course: "",
      key: "",
    });
  };

  const handleDelete = (id) => {
    let filteredList = [];
    filteredList = educationList.filter((li) => li.key !== id);
    setEducationList(filteredList);
    console.log(educationList);
  };

  return (
    <div className="education">
      <header className="educationHeader">
        <h1 className="educationTitle">Education</h1>
        {editMode ? (
          <button onClick={() => handleEdit()}>Save</button>
        ) : (
          <button onClick={() => handleEdit()}>Edit</button>
        )}
      </header>
      {educationList.length !== 0 ? (
        <EducationData data={educationList} delete={handleDelete} />
      ) : null}

      {editMode && (
        <form className="educationContainer" onSubmit={handleSubmit}>
          <div>
            <div>
              <label>
                Start Date:
                <input
                  required
                  type="date"
                  value={education.start}
                  onChange={(e) =>
                    setEducation((state) => ({
                      ...state,
                      start: e.target.value,
                    }))
                  }
                />
              </label>
              <label>
                End Date:
                <input
                  required
                  type="date"
                  value={education.end}
                  onChange={(e) =>
                    setEducation((state) => ({ ...state, end: e.target.value }))
                  }
                />
              </label>
            </div>
            <div>
              <label>
                School:
                <input
                  required
                  type="text"
                  value={education.school}
                  onChange={(e) =>
                    setEducation((state) => ({
                      ...state,
                      school: e.target.value,
                    }))
                  }
                />
              </label>
              <label>
                Course:
                <input
                  required
                  type="text"
                  value={education.course}
                  onChange={(e) =>
                    setEducation((state) => ({
                      ...state,
                      course: e.target.value,
                    }))
                  }
                />
              </label>
            </div>

            <div>
              <button
                onClick={() => setEducation({ ...education, key: uniqid() })}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Education;
