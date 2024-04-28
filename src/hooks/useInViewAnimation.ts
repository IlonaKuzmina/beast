import { useEffect } from "react";
import { inView, animate } from "motion";

const useInViewAnimation = () => {
  useEffect(() => {
    inView("#animate-left", ({ target }) => {
      animate(target, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] });
    });

    inView("#animate-bottom", ({ target }) => {
      animate(target, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] });
    });
  }, []);
};

export default useInViewAnimation;
