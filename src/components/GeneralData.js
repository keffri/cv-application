const GeneralData = (props) => {
  return (
    <div className="generalContainer">
      <h1>{props.data.firstName}</h1>
      <h1>{props.data.lastName}</h1>
      <h1>{props.data.email}</h1>
      <h1>{props.data.phone}</h1>
      <h1>{props.data.objective}</h1>
    </div>
  );
};

export default GeneralData;
