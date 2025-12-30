import { MdPlaylistAddCircle } from "react-icons/md";
const Generos = ({ index, genero }) => {
  return (
    <div
      className="flex hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden relative group"
      key={index}
    >
      <div className="w-full h-full bg-white rounded border border-gray-300 hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <div className="w-full h-[140px] sm:h-[200px]">
            <img
              className="h-full w-full object-cover rounded-t"
              src={genero.img}
              alt={genero.nombre}
            />
          </div>
          <h6 className="text-black font-semibold px-2 pt-1">
            {genero.nombre}
          </h6>
          <MdPlaylistAddCircle
            className="absolute cursor-pointer right-2 bottom-2"
            size={28}
          />
          <span className="px-2 pb-3 block text-neutral-700 hover:text-blue-600 duration-200 text-sm cursor-pointer">
            Ver más...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Generos;
