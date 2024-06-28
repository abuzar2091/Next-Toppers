import React, { useEffect, useState } from "react";

function JoinUs() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ["#youtube", "#instagram", "#telegram"];
  const [currentNumber, setCurrentNumber] = useState(0);
  useEffect(() => {
    let intervalId;
    const typeNextWord = () => {
      if (currentIndex < words[currentNumber].length) {
        setCurrentText(
          (prevtext) => prevtext + words[currentNumber][currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };
    intervalId = setInterval(typeNextWord, 200);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, words]);

  // Animation to remove characters from currentText when it reaches the end of words
  useEffect(() => {
    if (currentIndex === words[currentNumber].length) {
      let intervalId;
      const removeLastCharacter = () => {
        if (currentText.length > 0) {
          setCurrentText((prevtext) => prevtext.slice(0, -1)); // Remove last character
        } else {
          clearInterval(intervalId);
          setCurrentIndex(0);
          setCurrentNumber((prev) => (prev + 1) % 3); // Reset currentIndex after removing all characters
        }
      };
      intervalId = setInterval(removeLastCharacter, 200); // Change word every 200 milliseconds
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [currentIndex, currentText, words]);
  return (
    <div className="flex flex-col   w-100% bg-slate-200 py-20">
      <div className="flex flex-col items-center">
        <h1 className="!font-bold text-black text-[30px]">JOIN US ON</h1>
        <span className={`animate-typewriter text-[20px] ${currentNumber==0?`text-red-600`:currentNumber==1?`text-orange-400`:`text-blue-300`}  min-h-8`}>
          {currentText}
        </span>
      </div>
      <div className="flex justify-around mt-20 ">
        <div className="flex flex-col items-center">
            <img src="/socialmedia/youtubelogo.png" className="h-12"/>
            <p>Youtube</p>
            <p className="!font-semibold">FREELANCEIT</p>
        </div>
        <div className="flex flex-col items-center">
            <img src="/socialmedia/instagram.png" className="h-12"/>
            <p>Instagram</p>
            <p className="!font-semibold">FREELANCEIT EDUCATION</p>
        </div>
        <div className="flex flex-col items-center">
            <img src="/socialmedia/telegram.png" className="h-12"/>
            <p>Telegram</p>
            <p className="!font-semibold">FREELANCEIT</p>
        </div>

      </div>
    </div>
  );
}

export default JoinUs;