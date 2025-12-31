import { IoMenuSharp } from "react-icons/io5";
const MobileMenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label="Toggle navigation menu"
        className="rounded-lg p-2 hover:bg-white/10 transition cursor-pointer"
      >
        <IoMenuSharp className="text-2xl text-neutral-400" />
      </button>{" "}
    </div>
  );
};

export default MobileMenuButton;
