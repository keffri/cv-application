const EducationData = (props) => {
  return (
    <div>
      {props.data.map((edu) => (
        <div className="eduData" key={edu.key}>
          <p>{edu.start}</p>
          <p>{edu.end}</p>
          <p>{edu.school}</p>
          <p>{edu.course}</p>
          <button onClick={() => props.delete(edu.key)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EducationData;
