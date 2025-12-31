import logo from "../../../assets/logo.png";
import { MobileMenu } from "./MobileMenu.jsx";
import DesktopNav from "./DesktopNav.jsx";
import MobileMenuButton from "./MobileMenuButton.jsx";
import useHeader from "./hooks/useHeader.jsx";
const Header = () => {
  const { isOpen, toggleMenu } = useHeader();
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl p-4 mx-auto flex items-center justify-between h-20">
        <a href="#" className="flex-shrink-0">
          <img
            src={logo}
            alt="FaveList Logo"
            className="w-24 h-20 sm:w-28 object-cover bg-white"
          />
        </a>
        <nav>
          <DesktopNav />
        </nav>
        <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      {isOpen && <MobileMenu onClose={toggleMenu} />}
    </header>
  );
};

export default Header;
