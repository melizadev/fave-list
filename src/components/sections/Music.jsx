import Artistas from "./Artistas";
import { artistas, generos } from "../../data/musica";
import Generos from "./Generos";
const Music = () => {
  return (
    <section className="mb-6">
      <div className="mt-4 py-0 my-0 bg-white px-4 sm:px-6 md:px-8 lg:px-[100px]">
        {/* Título */}
        <h2 className="text-left text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 my-0">
          Música
        </h2>
        <h3 className="text-black my-0 text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
          Artistas
        </h3>

        {/* Artistas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {artistas.map((artista, index) => (
            <Artistas key={index} artista={artista} />
          ))}
        </div>

        {/* Géneros */}
        <section className="mt-6">
          <h2 className="text-black text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
            Géneros
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {generos.map((genero, index) => (
              <Generos key={index} genero={genero} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Music;
