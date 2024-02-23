import { useNavigate } from "react-router-dom";
import BackIcon from "../icons/BackIcon";

export default function GoBackButton() {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate(-1);
   };
   return (
      <button
         style={{ boxShadow: "inset 0 -6px 0 7px #BE6CFC" }}
         className="rounded-full w-[6rem] h-[6rem] bg-backGradient flex justify-center items-center"
         onClick={handleClick}
      >
         <BackIcon />
      </button>
   );
}
