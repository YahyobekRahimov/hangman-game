import { useDispatch, useSelector } from "react-redux";
import { setPuzzleWord } from "../../redux/puzzleWordSlice";
import { RootState } from "../../redux/store";

export default function PuzzleWord({ word }: { word: string }) {
   word = word.toUpperCase();
   const wordSplit = word.split(" ");
   const dispatch = useDispatch();
   dispatch(setPuzzleWord(word));
   const foundLetters = useSelector(
      (state: RootState) => state.puzzleWordSlice.lettersFound
   );

   let cols = 2;
   if (wordSplit.length <= 2) {
      cols = 1;
   }

   return (
      <div
         className={`grid gap-4 items-center justify-items-center w-max mx-auto ${
            cols == 2 ? "grid-cols-2" : "grid-cols-1"
         }`}
      >
         {wordSplit.map((word, index) => {
            return (
               <div className="flex gap-x-4" key={index}>
                  {word.split("").map((letter, index) => (
                     <div className="p-5 bg-slate-300" key={index}>
                        <span
                           className={`text-3xl ${
                              foundLetters.includes(letter)
                                 ? "opacity-100"
                                 : "opacity-0"
                           }`}
                        >
                           {letter}
                        </span>
                     </div>
                  ))}
               </div>
            );
         })}
      </div>
   );
}
