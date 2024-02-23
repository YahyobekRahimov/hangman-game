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

   return (
      <div className="flex-col gap-4 flex items-center">
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
