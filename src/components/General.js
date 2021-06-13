import { useState } from "react";
import GeneralData from "./GeneralData";

const General = (props) => {
  const [editMode, setEditMode] = useState(true);
  const [general, setGeneral] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    objective: "",
  });

  return (
    <div className="generalInfo">
      <header className="generalInfoHeader">
        <h1 className="generalInfoTitle">General Information</h1>
        {editMode ? (
          <button onClick={() => setEditMode(!editMode)}>Save</button>
        ) : (
          <button onClick={() => setEditMode(!editMode)}>Edit</button>
        )}
      </header>

      {editMode ? (
        <form className="generalInfoForm">
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={general.firstName}
              onChange={(e) =>
                setGeneral((state) => ({
                  ...state,
                  firstName: e.target.value,
                }))
              }
              required
            ></input>
            <input
              type="text"
              placeholder="Last Name"
              value={general.lastName}
              onChange={(e) =>
                setGeneral((state) => ({
                  ...state,
                  lastName: e.target.value,
                }))
              }
              required
            ></input>
          </div>

          <div>
            <input
              type="email"
              placeholder="E-Mail"
              value={general.email}
              onChange={(e) =>
                setGeneral((state) => ({
                  ...state,
                  email: e.target.value,
                }))
              }
              required
            ></input>
            <input
              type="phone"
              placeholder="Phone Number"
              value={general.phone}
              onChange={(e) =>
                setGeneral((state) => ({
                  ...state,
                  phone: e.target.value,
                }))
              }
              required
            ></input>
          </div>

          <textarea
            rows="6"
            cols="44"
            placeholder="Objective "
            value={general.objective}
            onChange={(e) =>
              setGeneral((state) => ({
                ...state,
                objective: e.target.value,
              }))
            }
          />
        </form>
      ) : (
        <GeneralData data={general} />
      )}
    </div>
  );
};

export default General;
