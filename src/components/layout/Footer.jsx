function Footer() {
  return (
    <footer className="w-full mt-10 bg-gray-900 text-gray-300 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-lg font-semibold text-white">Fave List</p>
        <p className=" text-sm text-center sm:text-left">
          Tus favoritos en un solo lugar
        </p>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-white">
            Contacto
          </a>
          <a href="#" className="hover:text-white">
            Privacidad
          </a>
        </div>
      </div>
      <div className="mt-4 text-xs flex items-center justify-center text-gray-500">
        © {new Date().getFullYear()} Fave List. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
