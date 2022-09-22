const PersonCardOne = ({ data, showData, name }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <button onClick={showData}>Show Data</button>
    </div>
  );
};

export default PersonCardOne;
