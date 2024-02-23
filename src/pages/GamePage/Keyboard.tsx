import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { addLetterFound } from "../../redux/puzzleWordSlice";
import { decrementLives } from "../../redux/livesSlice";

export default function Keyboard() {
   const alphabet = "abcdefghijklmnopqrstuvwxyz"
      .toUpperCase()
      .split("");
   const [lettersUsed, setLettersUsed] = useState<string[]>([]);
   const dispatch = useDispatch();

   const puzzleWord = useSelector(
      (state: RootState) => state.puzzleWordSlice.word
   );

   // functions

   const handleClick = (letter: string) => {
      letter = letter.toUpperCase();
      setLettersUsed((prev) => [...prev, letter]);
      if (puzzleWord.includes(letter)) {
         dispatch(addLetterFound(letter));
      } else {
         dispatch(decrementLives());
      }
   };

   // Side Effects
   useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
         const key = event.key.toUpperCase();
         if (alphabet.includes(key) && !lettersUsed.includes(key)) {
            handleClick(key);
         }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
         document.removeEventListener("keydown", handleKeyDown);
      };
   }, [lettersUsed]);
   return (
      <div className="grid grid-cols-8 gap-5 mt-10">
         {alphabet.map((letter, index) => (
            <button
               className={`p-6 bg-blue-700 text-white text-4xl ${
                  lettersUsed.includes(letter)
                     ? "opacity-30"
                     : "opacity-100"
               }`}
               onClick={() => handleClick(letter)}
               key={index}
               disabled={lettersUsed.includes(letter)}
            >
               {letter}
            </button>
         ))}
      </div>
   );
}
