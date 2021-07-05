import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import Scene from "./components/Scene";
import SceneUI from "./components/SceneUI";
import { AppStateContext, useAppState } from "./utils";

const Root = () => {
  const appState = useAppState();

  return (
    <>
      <Canvas
        id="canvas"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#fff",
        }}
      >
        <Suspense fallback={null}>
          <AppStateContext.Provider value={appState}>
            <Scene />
          </AppStateContext.Provider>
        </Suspense>
      </Canvas>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
      >
        <AppStateContext.Provider value={appState}>
          <SceneUI />
        </AppStateContext.Provider>
      </div>
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
