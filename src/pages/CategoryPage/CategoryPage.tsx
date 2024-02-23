import Container from "../../components/Container";
import GoBackButton from "../../components/GoBackButton";
import Data from "../../data/data.json";
import { Data as DataType } from "../../types/types";
import CategoryCard from "./CategoryCard";

export default function Category() {
   const categoryData: DataType = Data;
   const categories = Object.keys(categoryData.categories);
   return (
      <main className="bg-[url('./main-bg.png')] bg-no-repeat bg-cover h-screen">
         <Container className="flex flex-col justify-between gap-10">
            <div className="flex items-center">
               <GoBackButton />
               <h1 className="text-[#B1D9FE] text-[8.5rem] mx-auto">
                  Pick a Category
               </h1>
            </div>
            <div className="grid grid-cols-3 gap-x-7 gap-y-10">
               {categories.map((category, index) => (
                  <CategoryCard category={category} key={index} />
               ))}
            </div>
         </Container>
      </main>
   );
}
