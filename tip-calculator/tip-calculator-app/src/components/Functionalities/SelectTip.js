const SelectTip = ({ tipInput, setTipInput }) => {
  return (
    <div className="select-tip-container">
      <p>Select Tip</p>
      <div className="buttons-grid">
        <button
          onClick={() => {
            setTipInput(5);
          }}
        >
          5%
        </button>
        <button
          onClick={() => {
            setTipInput(10);
          }}
        >
          10%
        </button>
        <button
          onClick={() => {
            setTipInput(15);
          }}
        >
          15%
        </button>
        <button
          onClick={() => {
            setTipInput(25);
          }}
        >
          25%
        </button>
        <button
          onClick={() => {
            setTipInput(50);
          }}
        >
          50%
        </button>

        <input
          type="number"
          placeholder="Custom"
          value={tipInput}
          onChange={(e) => {
            setTipInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SelectTip;
