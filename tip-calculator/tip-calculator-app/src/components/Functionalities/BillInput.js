const BillInput = ({ billAmount, setBillAmount }) => {
  return (
    <div className="bill-input-container">
      <h3>Bill</h3>
      <input
        type="number"
        value={billAmount}
        placeholder="0"
        onChange={(e) => {
          setBillAmount(e.target.value);
        }}
      />
    </div>
  );
};

export default BillInput;
