import React, { useState, useEffect } from "react";

const catchphrases = [
  "#FromCluelessToCool",
  "#NotSoLostInTheCity",
  "Catchphrase Three",
  "Catchphrase Four",
];

const CatchphraseRotator = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === catchphrases.length - 1 ? 0 : prev + 1));
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-3xl relative h-10 w-full flex justify-end  pr-10">
      {catchphrases.map((phrase, index) => (
        <p
          key={index}
          className={`absolute transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 animate-fadeIn" : "opacity-0 animate-fadeOut"
          }`}
        >
          {phrase}
        </p>
      ))}
    </div>
  );
};

export default CatchphraseRotator;
