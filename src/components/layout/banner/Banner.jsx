import ImageWithPlaceholder from "../../ui/ImageLoad.jsx";
import fondo from "../../../assets/fondo.avif";
import fondoLow from "../../../assets/fondo-low.avif";

const Banner = () => {
  return (
    <div className="h-[30vh] relative">
      <ImageWithPlaceholder lowSrc={fondoLow} src={fondo} alt="TaskFlow hero" />
      <p className="absolute bottom-4 left-8 text-white font-bold">
        Need to relax? Listen to a good song.
      </p>
    </div>
  );
};

export default Banner;
