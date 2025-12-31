import { useState } from "react";
import { motion } from "framer-motion";

const ImageWithPlaceholder = ({ lowSrc, src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={lowSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100 blur-md scale-105"
        }`}
      />

      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full object-cover [object-position:80%_40%]"
      />
    </div>
  );
};

export default ImageWithPlaceholder;
