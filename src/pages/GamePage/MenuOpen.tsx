import { useNavigate } from "react-router-dom";
import UniversalButton from "../../components/UniversalButton";

export default function MenuOpen({
   type,
   handleClose,
}: {
   type: "paused" | "won" | "lost";
   handleClose: any;
}) {
   const navigate = useNavigate();
   const handleQuitGame = () => {
      navigate("/");
   };
   const handleNewCategory = () => {
      navigate("/category");
   };
   if (type === "paused") {
      return (
         <>
            <div
               onClick={handleClose}
               className="absolute top-0 left-0 w-screen h-screen bg-black opacity-50"
            ></div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[37rem] h-[28rem] bg-[rgba(47,68,176,0.9)]">
               <h3 className="text-9xl text-[#B4DBFF] absolute top-0 left-[50%] translate-y-[-50%] translate-x-[-50%]">
                  Paused
               </h3>
               <div className="flex justify-center items-center h-full">
                  <div className="flex flex-col items-center justify-center gap-10">
                     <UniversalButton
                        className="px-10 py-4 bg-[#2463FF] rounded-full text-[2rem] text-white uppercase"
                        onClick={handleClose}
                     >
                        Continue
                     </UniversalButton>
                     <UniversalButton
                        className="px-10 py-4 bg-[#2463FF] rounded-full text-[2rem] text-white uppercase"
                        onClick={handleNewCategory}
                     >
                        New Category
                     </UniversalButton>
                     <UniversalButton
                        className="px-10 py-4 bg-[#2463FF] rounded-full text-[2rem] text-white uppercase"
                        onClick={handleQuitGame}
                     >
                        Quit Game
                     </UniversalButton>
                  </div>
               </div>
            </div>
         </>
      );
   } else if (type === "won" || type === "lost") {
      return (
         <div
            onClick={handleClose}
            className="absolute top-0 left-0 w-screen h-screen bg-black opacity-50"
         >
            <div className="">
               <h3 className="capitalize">You {type}</h3>
               <UniversalButton>Play Again!</UniversalButton>
               <UniversalButton onClick={handleNewCategory}>
                  New Category
               </UniversalButton>
               <UniversalButton onClick={handleQuitGame}>
                  Quit game
               </UniversalButton>
            </div>
         </div>
      );
   }
}
