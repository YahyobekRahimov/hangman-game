import { useState } from "react";
import MenuIcon from "../../icons/MenuIcon";
import MenuOpen from "./MenuOpen";

export default function MenuButton() {
   const [open, setOpen] = useState(false);
   const handleClick = () => {
      setOpen(!open);
   };
   const handleClose = () => {
      setOpen(false);
   };
   return (
      <>
         <button onClick={handleClick}>
            <MenuIcon />
         </button>
         {open && (
            <MenuOpen type="paused" handleClose={handleClose} />
         )}
      </>
   );
}
