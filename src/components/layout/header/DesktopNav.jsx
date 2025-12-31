const DesktopNav = () => {
  return (
    <ul className="hidden md:flex gap-6 font-semibold text-neutral-700">
      <li>
        <a
          href="#"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Music
        </a>
      </li>
      <li>
        <a
          href="#"
          className="hover:text-blue-600 transition-colors duration-200 mb-2"
        >
          Artists
        </a>
      </li>
    </ul>
  );
};

export default DesktopNav;
