const PersonCard = ({ name, calories, scientificName, location }) => {
  const toNumber = parseInt(calories);

  const lessThanCardStyles = calories <= 100 ? "cardLowCalories" : "";
  const regualrCardStlyes =
    calories > 100 && calories <= 150 ? "cardRegularCalories" : "";
  const highCardStyles = calories > 150 ? "cardHighCalories" : "";

  return (
    <div
      className={`${lessThanCardStyles} ${regualrCardStlyes} ${highCardStyles}`}
    >
      <p>{name}</p>
      <p>{scientificName}</p>
      <p>{toNumber} calories</p>
      <p
        className="truncate-line-clamp"
        dangerouslySetInnerHTML={{ __html: location }}
      ></p>
    </div>
  );
};

export default PersonCard;
