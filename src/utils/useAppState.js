import { useState, createContext } from "react";

export const AppStateContext = createContext({});

export const CAMERA_FOCUS_POINTS = {
  DESK: 0,
  LAPTOP: 1,
  PAPERS: 2,
  RUBIK: 3,
};

export const useAppState = () => {
  const [focusPoint, setFocusPoint] = useState(CAMERA_FOCUS_POINTS.DESK);
  const [isShowingInfo, setIsShowingInfo] = useState(false);

  return { focusPoint, setFocusPoint, isShowingInfo, setIsShowingInfo };
};
