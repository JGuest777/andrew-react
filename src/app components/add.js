const Add = ({ increment, ...rest }) => {
  return (
    <div>
      <button onClick={increment} {...rest}>
        +1
      </button>
    </div>
  );
};

export default Add;
