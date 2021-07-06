import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { AppStateContext, useAppState } from "./utils";

import Scene from "./components/scene/Scene";
import UI from "./components/ui/UI";

import "./styles/index.css";

const Root = () => {
  const appState = useAppState();

  return (
    <>
      <Canvas id="canvas">
        <Suspense fallback={null}>
          <AppStateContext.Provider value={appState}>
            <Scene />
          </AppStateContext.Provider>
        </Suspense>
      </Canvas>

      <AppStateContext.Provider value={appState}>
        <UI />
      </AppStateContext.Provider>
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
