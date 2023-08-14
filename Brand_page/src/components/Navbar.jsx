import "../assets/css/Navbar.css";
import logo from "../assets/images/brand_logo.png";
import Herosection from "./Herosection";


const Navbar = () => {
  return (
    <>
      <div id="header">
        <img src={logo} />
        <nav id="navbar">
          <ul>
            <li>
              <a href="">Menu</a>{" "}
            </li>
            <li>
              <a href="">Location</a>
            </li>
            <li>
              <a href="">About</a>{" "}
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="btn">Login</button>
      </div>
      <section className="container">
       <Herosection />
      </section>
    </>
  );
};

export default Navbar;
