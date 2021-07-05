import { useState, createContext, useMemo } from "react";
import _ from "lodash";

export const AppStateContext = createContext({});

export const CAMERA_FOCUS_POINTS = {
  DESK: "DESK",
  LAPTOP: "LAPTOP",
  PAPERS: "PAPERS",
  RUBIK: "RUBIK",
};

export const useAppState = () => {
  const [focusPoint, _setFocusPoint] = useState(CAMERA_FOCUS_POINTS.DESK);

  // TODO: hack to fix the fact that onClick events are firing multiple times in a row
  const setFocusPoint = useMemo(() => _.debounce(_setFocusPoint, 50), []);

  return { focusPoint, setFocusPoint };
};
