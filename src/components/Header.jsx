import "./App.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Header() {
  return (
    <div className="mainText">
      <h1 className="medAuth">Medicine Checker</h1>
      <h5 className="medVerify">Verify your Medicine Here!</h5>
      <Link to="/public">
        <Button
          style={{
            width: "10rem",
            margin: "20px",
            backgroundColor: "blueviolet",
            color: "white",
          }}
        >
          Public
        </Button>
      </Link>
      <Link to="/login">
        <Button
          style={{
            width: "15rem",
            margin: "20px",
            backgroundColor: "blueviolet",
            color: "white",
          }}
        >
          Retailers/Manufacturer
        </Button>
      </Link>
    </div>
  );
}

export default Header;
