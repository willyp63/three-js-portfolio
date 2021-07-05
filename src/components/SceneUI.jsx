import React, { useContext } from "react";

import { AppStateContext, CAMERA_FOCUS_POINTS } from "../utils";

const SceneUI = () => {
  const { focusPoint, setFocusPoint } = useContext(AppStateContext);

  return (
    focusPoint !== CAMERA_FOCUS_POINTS.DESK && (
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          pointerEvents: "all",
        }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            fontSize: 64,
            width: 96,
            height: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setFocusPoint(CAMERA_FOCUS_POINTS.DESK)}
        >
          ✖
        </button>
      </div>
    )
  );
};

export default SceneUI;
