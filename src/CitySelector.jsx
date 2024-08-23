import React from "react";
import { useNavigate } from "react-router-dom";
import CatchphraseRotator from "./CatchphraseRotator";

const CitySelector = () => {
  const navigate = useNavigate();

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;

    if (selectedCity) {
      navigate("/categories", { state: { city: selectedCity } });
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <div className="flex items-center bg-gray-200 p-6 w-full max-w-xl rounded-full">
        <svg
          className="w-8 h-8 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4a7 7 0 11-7 7 7 7 0 017-7zM21 21l-4.35-4.35"
          />
        </svg>

        <select
          className="bg-transparent w-full ml-4 text-black text-lg p-2"
          defaultValue=""
          onChange={handleCityChange}
        >
          <option value="" disabled>
            Choose a city
          </option>
          <option value="Kalyani">Kalyani</option>
        </select>
      </div>

      <div className="flex justify-end w-full mt-32 mr-40">
        <div className="w-1/2">
          <CatchphraseRotator />
        </div>
      </div>
    </div>
  );
};

export default CitySelector;
