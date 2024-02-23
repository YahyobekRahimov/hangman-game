import { useNavigate } from "react-router-dom";

export default function Button() {
   const navigate = useNavigate();
   const handleClick = () => {
      navigate("/how-to-play");
   };
   return (
      <button
         className="text-white w-[16.25rem] h-[3.875rem] text-[2rem] uppercase bg-[#2463FF] rounded-[2.5rem] hover:bg-[#5987F9]"
         style={{
            boxShadow:
               "0 6px 0 1px #3C74FF inset,  0 -2px 0 3px #140E66 inset",
         }}
         onClick={handleClick}
      >
         How to play
      </button>
   );
}
