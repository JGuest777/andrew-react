const PersonCard = ({
  name,
  calories,
  scientificName,
  location,
  truncateString,
}) => {
  const toNumber = parseInt(calories);

  return (
    <div
      className={`${calories <= 100 ? "cardLowCalories" : ""} ${
        calories > 100 && calories <= 150 ? "cardRegularCalories" : ""
      }
          ${calories > 150 ? "cardHighCalories" : ""}
      }`}
    >
      <p>{name}</p>
      <p>{scientificName}</p>
      <p>{toNumber} calories</p>
      <p dangerouslySetInnerHTML={{ __html: location }}></p>
    </div>
  );
};

export default PersonCard;
