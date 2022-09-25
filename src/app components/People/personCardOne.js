const PersonCard = ({ name, age, hobbies, setDisplayName, sex }) => {
  return (
    <div
      className={`card ${sex === "male" ? "male" : "female"}`}
      onClick={() => setDisplayName(name)}
    >
      <p>{name}</p>
      <p>{age}</p>
      <p>{sex}</p>
      {hobbies.map((hobby) => (
        <p>{hobby}</p>
      ))}
    </div>
  );
};

export default PersonCard;
