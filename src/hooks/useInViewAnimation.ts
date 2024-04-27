import { useEffect } from "react";
import { inView, animate } from "motion";

const useInViewAnimation = () => {
  useEffect(() => {
    inView("div", ({ target }) => {
      // Select and animate the element with id "animate-left" if present
      const title = target.querySelector("#animate-left");
      if (title) {
        animate(title, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] });
      }

      // Select and animate the element with id "animate-bottom" if present
      const boxes = target.querySelector("#animate-bottom");
      if (boxes) {
        animate(boxes, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] });
      }
    });
  }, []);
};

export default useInViewAnimation;
