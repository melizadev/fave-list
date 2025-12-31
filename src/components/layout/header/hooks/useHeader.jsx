import { useState, useEffect } from "react";
const useHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) return;
      if (isOpen) setIsOpen(!isOpen);
    };

    const handleKey = (event) => {
      if (event.key === "Escape") {
        if (isOpen) setIsOpen(!isOpen);
      }
    };

    document.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);
  return { isOpen, toggleMenu };
};

export default useHeader;
