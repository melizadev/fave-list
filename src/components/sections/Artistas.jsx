import { MdPlaylistAddCircle } from "react-icons/md";
const Artistas = ({ index, artista }) => {
  return (
    <div className="flex" key={index}>
      <div className="w-full bg-white rounded border border-gray-300 over:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden relative">
        <div className="relative">
          <div className="w-full h-[160px] sm:h-[200px] relative">
            <img
              className="h-full w-full object-cover rounded-t transition-all duration-300"
              src={artista.img}
              alt={artista.nombre}
            />

            <div
              className="
             absolute inset-0 bg-white/70 
             opacity-0 hover:opacity-100 
             transition-opacity duration-300 
             flex items-center justify-center
           "
            >
              <p className="text-black font-medium text-center px-2 text-sm">
                Más información del artista
              </p>
            </div>
          </div>

          <h6 className="text-black px-2 pt-1 font-medium">{artista.nombre}</h6>

          <MdPlaylistAddCircle
            className="absolute right-2 bottom-2 cursor-pointer"
            size={28}
          />

          <span className="px-2 pb-2 block text-neutral-700 hover:text-blue-600 duration-200 cursor-pointer text-sm">
            Ver más...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Artistas;
