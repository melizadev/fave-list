import fondo from "../../../assets/fondo.jpg";
const Banner = () => {
  return (
    <div className="w-full h-[40vh] bg-purple-500/70">
      <div className="relative">
        <img className="w-full h-[40vh] object-cover" src={fondo} alt="" />
        <p className="absolute bottom-2 text-white right-2">
          Need to relax? Listen to a good song.
        </p>
      </div>
    </div>
  );
};

export default Banner;
