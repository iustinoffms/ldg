const PeopleInput = ({ peopleInput, setPeopleInput }) => {
  return (
    <div className="people-input-container">
      <h3>Number of People</h3>
      <input
        type="number"
        value={peopleInput}
        placeholder="0"
        onChange={(e) => {
          setPeopleInput(e.target.value);
        }}
      />
    </div>
  );
};

export default PeopleInput;
