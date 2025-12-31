function Footer() {
  return (
    <footer className="w-full mt-10 bg-gray-900 text-gray-100 py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-2xl font-bold text-white">Fave List</p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacity
          </a>
        </div>
      </div>
      <div className="mt-6 text-xs sm:text-sm text-center text-gray-100">
        © {new Date().getFullYear()} Fave List.
        <br />
        Developed by Mariann Zambrano
      </div>
    </footer>
  );
}

export default Footer;
