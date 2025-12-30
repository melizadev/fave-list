import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <header className="px-[90px]">
      <div className="flex items-center h-20  p-2">
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "120px",
            height: "auto",
            objectFit: "cover",
            borderRadius: "50%",
            background: "#fff",
          }}
        />
        <ul className="font-base font-semibold flex gap-5 text-grey">
          <li>
            <a
              className="text-neutral-700 hover:text-blue-600 duration-200"
              href="#"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              className="text-neutral-700 hover:text-blue-600 duration-200"
              href="#"
            >
              Musica
            </a>
          </li>
          <li>
            <a
              className="text-neutral-700 hover:text-blue-600 duration-200"
              href="#"
            >
              Cine
            </a>
          </li>
        </ul>
      </div>
      <div></div>
    </header>
  );
};
export default Header;
