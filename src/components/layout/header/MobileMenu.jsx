export const MobileMenu = ({ onClose }) => {
  return (
    <>
      <div
        id="mobile-navigation"
        className="md:hidden bg-gray-200 shadow-md p-2"
      >
        <ul className="gap-2 w-full flex flex-col justify-center items-center font-semibold text-neutral-700">
          <li>
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
              onClick={onClose}
            >
              Home
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
              onClick={onClose}
            >
              Music
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
              onClick={onClose}
            >
              Cinema
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
