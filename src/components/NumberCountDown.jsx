import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { ImCircleRight } from "react-icons/im";
// import backgroundImage from "../assets/backgroundImage.png";
import { Box } from "../data/Box";
import "animate.css";

const NumberCountDown = ({ setDisplayerath }) => {
  const [currentNumber, setCurrentNumber] = useState(1905);
  const [showText, setShowText] = useState(false);
  const [showRiceStadium, setShowRiceStadium] = useState(false);
  const [displayStartExperience, setDisplayStartExperience] = useState(false);
  const [hideCursor, setHideCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNumber((prevNumber) => prevNumber + 1);
    }, 40);

    return () => clearInterval(timer);
  }, []);

  // Stop the countdown when reaching 2024
  useEffect(() => {
    if (currentNumber >= 2024) {
      setCurrentNumber(2024);
      setTimeout(() => {
        setShowText(true); // Show the text after 1 second delay
      }, 900); //Show the text after countdown finishes
    }
  }, [currentNumber]);

  const animationfinsied = () => {
    console.log("function is here");
    setShowRiceStadium(true);
    setHideCursor(false);
  };

  useEffect(() => {
    if (showRiceStadium) {
      const timeoutId = setTimeout(() => {
        setDisplayStartExperience(true);
      }, 2500); // Adjust the delay as needed
      return () => clearTimeout(timeoutId);
    }
  }, [showRiceStadium]);

  return (
    <div className="bg-BlueBackground h-[100vh] ">
      <div className="relative h-[100vh] text-white text-center  flex flex-col justify-center items-center ">
        <div className="flex justify-center items-center text-4xl">
          {showText ? (
            <h1 className="text-6xl font-custom-extrabold font-disket text-center">
              <TypeAnimation
                sequence={[
                  1500,
                  "A.S Moloobhoy Pvt Ltd.",
                  () => animationfinsied(),
                ]}
                cursor={hideCursor}
                wrapper="span"
              />
            </h1>
          ) : (
            <span className="font-bold font-disket text-6xl ">
              {currentNumber}
            </span>
          )}
        </div>
        {showRiceStadium && (
          <div
            className={`text-white text-center mt-4 ${
              showRiceStadium
                ? "opacity-100 transition-opacity duration-500"
                : "opacity-0"
            }`}
          >
            <h6 className="text-white text-2xl">
              <span className="px-0.5 font-bold font-disket">119 </span>
              <span className="px-1 font-bold font-disket">Years</span>
              <span className="px-1 font-bold font-disket">Of </span>
              <span className="px-1 font-bold font-disket">Legacy</span>
            </h6>
          </div>
        )}

        {displayStartExperience && (
          <div className="flex mt-5 w-full justify-center items-center">
            <h1 className="font-normal font-disket text-white text-2xl uppercase animate__animated animate__fadeInUp">
              Start Experience
            </h1>
            <button onClick={() => setDisplayerath(true)} className="ml-4">
              <Box />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NumberCountDown;
