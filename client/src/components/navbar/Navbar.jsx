import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const user = false;
  return (
    <nav className="nav">
      <div className="top">
        <div className="topleft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
        </div>
        <div className="topcenter">
          <ul className="toplist">
            <li className="listItem">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li className="listItem">
              <Link to="/about" className="link">
                ABOUT
              </Link>
            </li>
            <li className="listItem">
              <Link to="/contact" className="link">
                CONTACT
              </Link>
            </li>
            <li className="listItem">
              <Link to="/write" className="link">
                WRITE
              </Link>
            </li>
            <li className="listItem">
              <Link to={user ? "/logout" : "/login"} className="link">
                {user ? "LOGOUT" : "LOGIN"}
              </Link>
            </li>
            {!user && (
              <li className="listItem">
                <Link to="/register" className="link">
                  REGISTER
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="topright">
          {user && <img className="img" src="/profile.jpeg" alt="profile" />}
          <i className="search fas fa-search"></i>
        </div>
      </div>
    </nav>
  );
}
