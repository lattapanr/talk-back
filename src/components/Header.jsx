import Logo from "../assets/images/logo.png";
import LogoDark from "../assets/images/logo-dark.png";
import "../index.css";
import { CiBrightnessDown } from "react-icons/ci";
import { PiMoonStarsThin } from "react-icons/pi";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="flex w-full mb-16 sm:mb-8 md:mb-14 pt-3 border-b border-charcoal dark:border-off-white">
      <div className="w-full flex justify-between items-center">
        {!darkMode ? (
          <img
            src={Logo}
            alt="TalkBack logo"
            className="py-2 w-[120px] sm:w-[150px] h-auto"
          />
        ) : (
          <img
            src={LogoDark}
            alt="TalkBack logo dark mode"
            className="py-2 w-[120px] sm:w-[150px] h-auto"
          />
        )}

        <div onClick={toggleDarkMode} className="cursor-pointer">
          {!darkMode ? (
            <CiBrightnessDown
              size={40}
              className="text-charcoal hover:text-park-green"
            />
          ) : (
            <PiMoonStarsThin
              size={40}
              className="text-off-white hover:text-desert-gold"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
