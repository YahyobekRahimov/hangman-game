import HangmanLogo from "../../icons/HangmanLogo";
import Button from "./Button";
import PlayButton from "./PlayButton";

export default function MainPage() {
   return (
      <div className="h-screen flex justify-center items-center">
         <div
            style={{
               boxShadow:
                  "inset 0 6px 0 8px #2463FF,  0 -8px 0 4px #140E66 inset",
            }}
            className="rounded-3xl relative bg-boxGradient w-[37rem] h-[31.25rem] flex items-end justify-center pb-10"
         >
            <HangmanLogo className="absolute top-[-15%] left-[50%] translate-x-[-50%]" />
            <div className="flex flex-col justify-end items-center gap-[3rem]">
               <PlayButton />
               <Button />
            </div>
         </div>
      </div>
   );
}
