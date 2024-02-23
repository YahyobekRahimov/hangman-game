import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import HeartIcon from "../../icons/HeartIcon";

export default function LivesLeft() {
   const lives = useSelector((state: RootState) => state.livesSlice);
   return (
      <div className="text-5xl flex gap-5 items-center text-white">
         {lives}
         <HeartIcon />
      </div>
   );
}
