import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import "../index.css";

const Header = () => {
  return (
    <nav className="flex justify-between w-full mb-16 pt-3 border-b border-charcoal">
      <div className="flex-center">
        <img src={Logo} alt="TalkBack logo" className="py-2 w-[150px] h-auto" />
      </div>
    </nav>
  );
};

export default Header;
