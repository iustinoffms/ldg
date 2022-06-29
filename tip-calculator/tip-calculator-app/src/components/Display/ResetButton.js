const ResetButton = ({ resetAll }) => {
  return (
    <div className="reset-button-container">
      <button onClick={resetAll}>Reset</button>
    </div>
  );
};

export default ResetButton;
