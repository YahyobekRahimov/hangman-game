import { useNavigate } from "react-router-dom";

export default function CategoryCard({
   key,
   category,
}: {
   key: number;
   category: string;
}) {
   const navigate = useNavigate();
   const handleCategoryClick = () => {
      navigate(`/play/${getCategoryPath(category)}`);
   };
   const getCategoryPath = (category: string) => {
      return category.toLowerCase().split(" ").join("_");
   };
   return (
      <button
         onClick={handleCategoryClick}
         key={key}
         className="flex justify-center items-center w-full bg-[#2463FF] text-white text-[3rem] py-10 rounded-3xl"
      >
         {category}
      </button>
   );
}
