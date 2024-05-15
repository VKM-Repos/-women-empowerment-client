import { useEffect } from "react";

export const useDisableNumberInputScroll = (): void => {
  useEffect(() => {
    // Define a function to prevent the default scroll behavior
    const handleWheel = (e: Event) => {
      e.preventDefault();
    };

    // Attach the handleWheel function as an event listener to document
    // This approach uses event delegation, avoiding the need to query and iterate over each input element
    const handleWheelOnNumberInput = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" &&
        (target as HTMLInputElement).type === "number"
      ) {
        handleWheel(e);
      }
    };

    document.addEventListener("wheel", handleWheelOnNumberInput, {
      passive: false,
    });

    // Clean up by removing the event listener when the component unmounts
    return () => {
      document.removeEventListener("wheel", handleWheelOnNumberInput);
    };
  }, []); // The empty dependency array ensures that this effect runs once, like componentDidMount
};
