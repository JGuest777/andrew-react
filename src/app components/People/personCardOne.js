const PersonCard = ({ name, calories, scientificName, location }) => {
  const toNumber = parseInt(calories);

  return (
    <div className="card">
      <p>{name}</p>
      <p>{scientificName}</p>
      <p>{toNumber} calories</p>
      <p dangerouslySetInnerHTML={{ __html: location }}></p>
    </div>
  );
};

export default PersonCard;
