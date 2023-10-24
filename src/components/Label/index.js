import "./index.css";
const Label = () => (
  <div className="label-container">
    <div className="each-label-container">
      <div className="label-avaliable-box"></div>
      <p className="label">Available</p>
    </div>
    <div className="each-label-container">
      <div className="label-selected-box"></div>
      <p className="label">Selected</p>
    </div>
    <div className="each-label-container">
      <div className="label-sold-box"></div>
      <p className="label">Sold</p>
    </div>
  </div>
);
export default Label;
