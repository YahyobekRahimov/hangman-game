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
      navigate(`/play/${category.toLowerCase()}`);
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
