import { useCallback, useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export const useAnimationValue = (state, getValueForState, duration = 500) => {
  const [currentValue, setCurrentValue] = useState(getValueForState(state));

  const target = useRef(getValueForState(state));
  const deltaValue = useRef(0);

  useEffect(() => {
    const previousTarget = target.current;
    const newTarget = getValueForState(state);
    const diff = newTarget - previousTarget;

    target.current = newTarget;
    deltaValue.current = (diff * 1000) / duration;
  }, [state, getValueForState, duration]);

  useFrame((_, deltaTime) => {
    if (currentValue !== target.current) {
      const compare = currentValue > target.current;
      const newValue = currentValue + deltaValue.current * deltaTime;
      const newCompare = newValue > target.current;

      setCurrentValue(compare !== newCompare ? target.current : newValue);
    }
  });

  return currentValue;
};

export const useAnimationTuple = (state, getValueForState, duration) => {
  const getValueForState0 = useCallback(
    (s) => getValueForState(s)[0],
    [getValueForState]
  );
  const getValueForState1 = useCallback(
    (s) => getValueForState(s)[1],
    [getValueForState]
  );
  const getValueForState2 = useCallback(
    (s) => getValueForState(s)[2],
    [getValueForState]
  );

  const currentValue0 = useAnimationValue(state, getValueForState0, duration);
  const currentValue1 = useAnimationValue(state, getValueForState1, duration);
  const currentValue2 = useAnimationValue(state, getValueForState2, duration);

  return [currentValue0, currentValue1, currentValue2];
};
