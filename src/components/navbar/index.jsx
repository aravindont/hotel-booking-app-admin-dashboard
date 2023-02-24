import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function NavbarComponent() {
  const { dispatch } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);
  const handleThemeChange = () => {
    dispatch({ type: "TOGGLE" });
    setIsActive((prev) => !prev);
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>

          <div className="item">
            <div className="icon" onClick={handleThemeChange}>
              {isActive ? <LightModeTwoToneIcon /> : <DarkModeTwoToneIcon />}
            </div>
          </div>

          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="user-icon"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
