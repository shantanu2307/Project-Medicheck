import './App.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          &nbsp; MediCheck
        </a>
        <form className="d-flex">
          <button className="btn btn-custom loginBtn" type="submit">
            Login
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;