import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function LivesLeft() {
   const lives = useSelector((state: RootState) => state.livesSlice);
   return <div className="text-5xl">Lives: {lives}</div>;
}
