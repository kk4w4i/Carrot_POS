import React from "react";
import useHover from "../../custom-hooks/useHover";
import { cn } from "@/lib/utils"


export function SvgButton({ children, stroke, hoverStroke, onClick, className }) {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        stroke: isHovered ? hoverStroke : stroke,
      });
    }
    return child;
  });

  return (
    <button
      className={cn(className)}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ border: "none", cursor: "pointer", color: isHovered ? hoverStroke : stroke }}
    >
      {clonedChildren}
    </button>
  );
}