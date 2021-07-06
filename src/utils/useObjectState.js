import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AppStateContext } from "./useAppState";

export const OBJECT_STATES = {
  RESTING: 0,
  HOVERED: 1,
  ACTIVE: 2,
};

export const useObjectState = (thisFocusPoint) => {
  const { focusPoint, setFocusPoint, setIsShowingInfo } =
    useContext(AppStateContext);

  const [isHovered, setIsHovered] = useState(false);

  const isActive = useMemo(
    () => focusPoint === thisFocusPoint,
    [thisFocusPoint, focusPoint]
  );

  const objectState = useMemo(() => {
    if (isActive) {
      return OBJECT_STATES.ACTIVE;
    } else if (isHovered) {
      return OBJECT_STATES.HOVERED;
    }
    return OBJECT_STATES.RESTING;
  }, [isActive, isHovered]);

  useEffect(() => {
    window.document.querySelector("#canvas").style.cursor =
      objectState === OBJECT_STATES.HOVERED ? "pointer" : "auto";
  }, [objectState]);

  const onClick = useCallback(() => {
    if (!isActive) {
      setFocusPoint(thisFocusPoint);
      setIsShowingInfo(false);
    }
  }, [isActive, thisFocusPoint, setFocusPoint, setIsShowingInfo]);

  const onEnter = useCallback(() => setIsHovered(true), []);
  const onExit = useCallback(() => setIsHovered(false), []);

  return { onEnter, onExit, onClick, objectState };
};
