/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            boxGradient:
               "linear-gradient(180deg, rgb(52, 74, 186, 0.8) 100%, rgb(0, 20, 121, 0.8) 83%)",
            playGradient:
               "linear-gradient(180deg, #FD70FE 0%, #8892FF 83%)",
            backGradient:
               "linear-gradient(180deg, #FE71FE 0%, #8B92FF 100%)",
         },
      },
   },
   plugins: [],
};
