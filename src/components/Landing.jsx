import "./App.css";
import Vector from "./vector.jsx";
import Header from "./Header.jsx";
import StaticNavVar from "./StaticNavBar";

function Landing() {
  return (
    <div>
      <StaticNavVar />
      <Vector />,
      <Header />
    </div>
  );
}

export default Landing;
