import { ReactNode } from "react";

export default function UniversalButton({
   onClick,
   className,
   children,
}: {
   onClick?: any;
   className?: string;
   children?: ReactNode;
}) {
   return (
      <button className={className} onClick={onClick}>
         {children}
      </button>
   );
}
