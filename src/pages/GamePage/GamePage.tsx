import { useLocation } from "react-router-dom";
import Container from "../../components/Container";
import Keyboard from "./Keyboard";
import LivesLeft from "./LivesLeft";
import PuzzleWord from "./PuzzleWord";
import DATA from "../../data/data.json";
import { Data as DataType } from "../../types/types";
import MenuButton from "./MenuButton";

export default function MainPage() {
   const location = useLocation();
   const data: DataType = DATA;
   const categories = Object.keys(data.categories);

   const getCategoryPath = (category: string) => {
      return category.toLowerCase().split(" ").join("_");
   };

   const chosenCategory =
      categories.find((category) => {
         return (
            getCategoryPath(category).trim() ===
            location.pathname.slice(6).trim()
         );
      }) || "Animals";

   const words = data.categories[`${chosenCategory}`];

   function getRandomNumber(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   return (
      <main className="h-screen bg-[url('./main-bg.png')] bg-no-repeat bg-cover">
         <Container className="pt-10">
            <div className="flex justify-between items-center">
               <MenuButton />
               <LivesLeft />
            </div>
            <PuzzleWord word={words[getRandomNumber(0, 30)].name} />
            <Keyboard />
         </Container>
      </main>
   );
}
