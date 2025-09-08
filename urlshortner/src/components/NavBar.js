import {Link} from "react-router-dom";
import "../styles/App.css";
function NavBar(){
    return(
        <nav className="navbar">
        <h2>URL Shortener</h2>
        <div className="nav-links">
            <Link to="/">Shorten</Link>
            <Link to="/urls">View URLs</Link>
        </div>
        </nav>
    );
}
export default NavBar;