import React, { useContext, useEffect, useState } from "react";

import { AppStateContext, CAMERA_FOCUS_POINTS } from "../../utils";
import ResumeUI from "./ResumeUI";
import LaptopUI from "./LaptopUI";
import HobbiesUI from "./HobbiesUI";

const SceneUI = () => {
  const { focusPoint, setFocusPoint, isShowingInfo, setIsShowingInfo } =
    useContext(AppStateContext);

  const [activeUI, setActiveUI] = useState(null);
  const [isShowingCloseButton, setIsShowingCloseButton] = useState(false);

  useEffect(() => {
    if (focusPoint === CAMERA_FOCUS_POINTS.DESK) {
      // dismount UI after a delay so that the animation can finish
      setTimeout(() => {
        setActiveUI(null);
        setIsShowingCloseButton(false);
      }, 500);
    } else {
      setActiveUI(getActiveUI(focusPoint));
      setIsShowingCloseButton(true);
    }
  }, [focusPoint]);

  return (
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
      <div
        style={{
          transition: "opacity ease-in-out 500ms",
          opacity: focusPoint === CAMERA_FOCUS_POINTS.DESK ? 0 : 1,
        }}
      >
        {isShowingCloseButton && (
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              pointerEvents: "all",
            }}
          >
            <button
              className="ui-btn ui-btn-secondary w-16 h-16 text-xl md:w-20 md:h-20 md:text-4xl"
              style={{ borderRadius: "50%" }}
              onClick={() => {
                setFocusPoint(CAMERA_FOCUS_POINTS.DESK);
                setIsShowingInfo(false);
              }}
            >
              <img alt="close" src="/imgs/close.png" className="w-8 h-8" />
            </button>
          </div>
        )}

        <div className="w-screen h-screen flex-center">{activeUI}</div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          pointerEvents: "all",
        }}
      >
        <button
          className="ui-btn ui-btn-secondary w-16 h-16 text-4xl"
          style={{ borderRadius: "50%" }}
          onClick={() => setIsShowingInfo(!isShowingInfo)}
        >
          ?
        </button>
      </div>

      {isShowingInfo && (
        <div
          className="ui-bg px-6 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8"
          style={{
            width: "55vw",
            maxWidth: 1000,
            height: "55vh",
            position: "absolute",
            bottom: 80,
            right: 80,
            pointerEvents: "all",
          }}
        >
          <div className="h-full overflow-y-scroll">
            <h1 className="ui-h1">FAQs</h1>
            <h4 className="my-4 ui-h4 font-bold">How does this work?</h4>
            <p className="ui-h5">
              Try clicking on one of the items on my desk.
              <br />
              <br />
              If you're still having trouble, I apologize. I know the site is
              still not accessible to a lot of users and I'm working to improve
              that.
            </p>
            <h4 className="my-4 ui-h4 font-bold">Why?</h4>
            <p className="ui-h5">
              2D UI's are boring 🥱 This is my atttempt to create a fully
              accessible and responsive 3D UI on the web. Users can click on
              objects in the scene to have the camera move towards that object
              and reveal some information or more objects to be interacted with.
              This theoretically mirrors how links currently work on the web and
              could be expanded to create any UI imaginable.
            </p>
            <h4 className="my-4 ui-h4 font-bold">
              Is this the future of the web?
            </h4>
            <p className="ui-h5">
              Probably not. Sites like these are very slow and painful to
              develop (likely even if new frameworks are introduced), and in
              most cases it provided little value to customers. However, I do
              think there are niche applications where this type of site may
              have commercial value. For example, a car company may want to
              create a 3D site to show off it's new model and all the fancy
              features it has.
            </p>
            <h4 className="my-4 ui-h4 font-bold">
              Can you solve a Rubik Cube?
            </h4>
            <p className="ui-h5">No</p>
            <h4 className="my-4 ui-h4 font-bold">
              Do you know anything about neural networks?
            </h4>
            <p className="ui-h5">No</p>
            <h4 className="my-4 ui-h4 font-bold">
              Did you model that tree yourself?
            </h4>
            <p className="ui-h5">Sadly yes 😬</p>
            <h4 className="my-4 ui-h4 font-bold">Where are we?</h4>
            <p className="ui-h5">
              Out the window is a view of New Zealand. I don't actually live
              here 😭
            </p>
            <h4 className="my-4 ui-h4 font-bold">How's the site built?</h4>
            <p className="ui-h5">
              Glad you asked! The site is built with React and{" "}
              <a href="Three.js.https://threejs.org/">Three.js</a>. React keeps
              track of the 3D scene as a component tree, just like it does the
              2D UI on top. However, the 3D scene part of the component tree
              gets rendered with a library called{" "}
              <a href="https://github.com/pmndrs/react-three-fiber">
                react-three-fiber
              </a>{" "}
              instead of react-dom. This lets us have a 3D and 2D UI that share
              the same app state. And in the end everything is very declaritive
              just like you would expect with React. For example, we can tell
              the camera where it should be based on the app state and that it
              should animate itself to get from one place to another and that's
              it! You can checkout the source code for the project{" "}
              <a href="https://github.com/willyp63/three-js-portfolio">here</a>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const getActiveUI = (focusPoint) => {
  switch (focusPoint) {
    case CAMERA_FOCUS_POINTS.PAPERS:
      return <ResumeUI />;
    case CAMERA_FOCUS_POINTS.LAPTOP:
      return <LaptopUI />;
    case CAMERA_FOCUS_POINTS.RUBIK:
      return <HobbiesUI />;
    default:
      return null;
  }
};

export default SceneUI;
