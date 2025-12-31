import { motion } from "framer-motion";
import ArtistsCards from "./cards/ArtistsCards";
import GenresCards from "./cards/GenresCards";
import { artists, genres } from "../../data/data";
import { container, item } from "../utils/motion";

const MusicDashboard = () => {
  return (
    <motion.main
      className="mb-6"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="mt-4 bg-white px-4 sm:px-6 md:px-8 lg:px-[100px]">
        <motion.h1
          variants={item}
          className="text-left text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 my-2"
        >
          Music
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-black text-xl sm:text-2xl md:text-3xl font-semibold mb-2"
        >
          Artists
        </motion.h2>

        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {artists.map((artist, index) => (
            <motion.div key={index} variants={item}>
              <ArtistsCards artist={artist} />
            </motion.div>
          ))}
        </motion.div>

        <section className="mt-6">
          <motion.h2
            variants={item}
            className="text-black text-xl sm:text-2xl md:text-3xl font-semibold mb-3"
          >
            Genres
          </motion.h2>

          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
          >
            {genres.map((genre, index) => (
              <motion.div key={index} variants={item}>
                <GenresCards genre={genre} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </motion.main>
  );
};

export default MusicDashboard;
