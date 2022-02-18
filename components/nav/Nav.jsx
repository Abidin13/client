import { Link } from "react-router-dom";
import { navimg } from "..";
function Nav() {
  const user = false;
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <div className="nav__left">
            <Link to="/" className="nav__logo">
              BLOGGER
            </Link>
          </div>
          <div className="nav__center">
            <ul className="nav__menu">
              <li className="nav__item">
                <Link to="/">Home</Link>
              </li>

              <li className="nav__item">
                <Link to="/">About</Link>
              </li>
              <li className="nav__item">
                <Link to="/">Contact</Link>
              </li>
              <li className="nav__item">
                <Link to="/write">Write</Link>{" "}
              </li>
              <li className="nav__item">{user && "Logout"}</li>
            </ul>
          </div>
          <div className="nav__right">
            {user ? (
              <img src={navimg} alt="" className="nav__img" />
            ) : (
              <ul className="nav__menu">
                <li className="nav__menu-item">
                  <Link to="/login">Login</Link>
                </li>
                <li className="nav__menu-item">
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
