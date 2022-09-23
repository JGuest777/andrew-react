const PersonCard = ({ name, age, hobbies, setDisplayName }) => {
  return (
    <div className="card" onClick={() => setDisplayName(name)}>
      <p>{name}</p>
      <p>{age}</p>
      {hobbies.map((hobby) => (
        <p>{hobby}</p>
      ))}
    </div>
  );
};

export default PersonCard;
