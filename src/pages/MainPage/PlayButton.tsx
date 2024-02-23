import { useNavigate } from "react-router-dom";
import PlayLogo from "../../icons/PlayLogo";

export default function PlayButton() {
   const navigate = useNavigate();
   const handleClick = () => {
      navigate("/category");
   };
   return (
      <button
         style={{
            boxShadow:
               "0 -12px 0 4px rgba(157, 45, 245, 0.5) inset, 0 -4px 0 4px rgba(36, 48, 65, 0.5) inset",
         }}
         className="w-[12.5rem] h-[12.5rem] flex items-center justify-center bg-playGradient rounded-full"
         onClick={handleClick}
      >
         <PlayLogo />
      </button>
   );
}
