import { MdPlaylistAddCircle } from "react-icons/md";
const Artists = ({ index, artist }) => {
  return (
    <article
      key={index}
      className="flex w-full"
      aria-label={`Artist card for ${artist.name}`}
    >
      <div className="w-full bg-white rounded border border-gray-300 overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-sm">
        <div className="w-full h-[140px] sm:h-[200px] relative">
          <img
            className="h-full w-full object-cover rounded-t transition-all duration-300"
            src={artist.img}
            alt={`Photo of ${artist.name}`}
          />

          <div
            className="
                absolute inset-0 bg-white/70 
                opacity-0 hover:opacity-100 
                transition-opacity duration-300 
                flex items-center justify-center
              "
          >
            <p className="text-neutral-700 font-medium text-center text-sm">
              Show more about {artist.name}
            </p>
          </div>
        </div>
        <div className="relative">
          <h2 className="text-neutral-700 px-3 pt-1 font-semibold text-base">
            {artist.name}
          </h2>
          <button
            aria-label={`Add ${artist.name} to playlist`}
            className="cursor-pointer absolute top-4 right-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <MdPlaylistAddCircle size={28} />
          </button>
          <button
            className="px-2 m-1 pb-2 block text-neutral-700 hover:text-blue-600 duration-200 cursor-pointer text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label={`Show more about ${artist.name}`}
          >
            show more...
          </button>
        </div>
      </div>
    </article>
  );
};

export default Artists;
