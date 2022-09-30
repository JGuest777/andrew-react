const PersonCard = ({
  name,
  calories,
  scientificName,
  location,
  under150Calories,
}) => {
  return (
    <div className="card">
      <p>{name}</p>
      <p>{scientificName}</p>
      <p>{calories.filter(() => under150Calories)} calories</p>
      <p>{location}</p>
    </div>
  );
};

export default PersonCard;
