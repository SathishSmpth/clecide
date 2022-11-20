import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <h3 className="navbar-brand">CRUD Operations</h3>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"><h3>Post</h3></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/get"><h3>Get</h3></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/put"><h3>Put</h3></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delete"><h3>Delete</h3></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;