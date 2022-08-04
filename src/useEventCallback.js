import { useEffect } from "react";

export const useEventCallback = ({
  eventName,
  callback,
  element = window,
  active = true
}) => {
  useEffect(() => {
    if (active) {
      element.addEventListener(eventName, callback);

      return () => {
        element.removeEventListener(eventName, callback);
      };
    }
  }, [eventName, callback, element, active]);
};
