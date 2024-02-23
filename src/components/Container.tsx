import { CSSProperties, ReactNode } from "react";

export default function Container({
   className,
   style,
   children,
}: {
   className?: string;
   style?: CSSProperties;
   children?: ReactNode;
}) {
   return (
      <div
         className={`container mx-auto px-24 ${className}`}
         style={style}
      >
         {children}
      </div>
   );
}
