import { useCallback, useEffect, useState } from "react";

export const useHoverCursor = (isHoverable = true) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    window.document.querySelector("#canvas").style.cursor =
      isHoverable && isHovered ? "pointer" : "auto";
  }, [isHovered, isHoverable]);

  const onEnter = useCallback(() => setIsHovered(true), []);
  const onExit = useCallback(() => setIsHovered(false), []);

  return [onEnter, onExit];
};
