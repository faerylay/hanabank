import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { throttle } from "lodash";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const mobileDimensionsAtom = atom(getWindowDimensions());

export default function useWindowDimensions() {
  const [mobileDimensions, setMobileDimensions] = useAtom(mobileDimensionsAtom);
  useEffect(() => {
    const handleResize = () => {
      setMobileDimensions(getWindowDimensions());
    };

    // Throttle the handleResize function to avoid too many state updates on rapid resize
    const throttledHandleResize = throttle(handleResize, 100);

    window.addEventListener("resize", throttledHandleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", throttledHandleResize);
      throttledHandleResize.cancel(); // Cancel any remaining throttled calls during cleanup
    };
  }, []);

  return mobileDimensions;
}
