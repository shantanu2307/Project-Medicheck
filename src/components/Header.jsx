import "./App.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="mainText">
      <h1 className="medAuth">Medicine Checker</h1>
      <h5 className="medVerify">Verify your Medicine Here!</h5>
      <Link to="/public">
        <button className="btn btn-custom publicBtn">Public</button>
      </Link>
      <Link to="/login">
        <button className="btn btn-custom rtlBtn" type="link">
          Retailers/Manufacturers
        </button>
      </Link>
    </div>
  );
}

export default Header;
