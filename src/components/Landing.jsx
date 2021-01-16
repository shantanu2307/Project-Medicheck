import './App.css';
import Vector from "./vector.jsx";
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";

function Landing() {
  return (
    <div className="App">
      <Navbar />,
      <Vector />,
      <Header />  
    </div>
  );
}

export default Landing;
