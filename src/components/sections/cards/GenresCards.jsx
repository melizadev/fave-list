import { MdPlaylistAddCircle } from "react-icons/md";

const Generos = ({ index, genre }) => {
  return (
    <article
      key={index}
      className="flex w-full transition-all duration-300 transform hover:scale-105 overflow-hidden relative group"
      aria-label={`Genre card for ${genre.name}`}
    >
      <div className="w-full h-full bg-white rounded border border-gray-300 transition-shadow duration-300 shadow-sm">
        <div className="relative">
          <div className="w-full h-[140px] sm:h-[200px]">
            <img
              className="h-full w-full object-cover rounded-t"
              src={genre.img}
              alt={`Image representing ${genre.name}`}
            />
          </div>

          <div className="relative">
            <h2 className="text-black font-semibold pt-1 px-2 text-base">
              {genre.name}
            </h2>
            <button
              aria-label={`Add ${genre.name} to playlist`}
              className="cursor-pointer absolute top-4 right-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <MdPlaylistAddCircle size={28} />
            </button>
            <button
              className="pb-2 px-1 m-1 text-neutral-700 hover:text-blue-600 duration-200 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-label={`Show more about ${genre.name}`}
            >
              Show more...
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Generos;
