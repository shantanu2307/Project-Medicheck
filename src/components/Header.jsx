import "./App.css";

function Header() {
  return (
    <div className="mainText">
      <h1 className="medAuth">Medicine Checker</h1>
      <h5 className="medVerify">Verify your Medicine Here!</h5>
      <button className="btn btn-custom publicBtn">Public</button>
      <button className="btn btn-custom rtlBtn">Retailers</button>
    </div>
  );
}

export default Header;
