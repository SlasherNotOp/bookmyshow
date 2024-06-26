import Drop from "../drop-down/Drop";
import logo1 from "../../assets/logo.svg"
import logo2 from "../../assets/bars-solid.svg"
import "./Header.css"




 const Header = () => {

  


  return (
    <div id="navbar">
      <div className="left">
        <div className="logo_img">
          <img src={logo1} ></img>
        </div>
        <input type="text" placeholder="Search for Movie, Events, Plays, Sports and Activities"></input>
      </div>
      <div className="right">
      <Drop/>
      <button className="sign-in">Sign in</button>
      <div className="svg-img">
        <img src={logo2}></img>
      </div>
      </div>
    </div>
    
  );
  
};
export default Header;
