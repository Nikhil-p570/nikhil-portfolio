import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export const RocketLaunch = () => {
  const { scrollY } = useScroll();
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > 50) {
        setStartAnimation(true);
      } else {
        // reset when scrolling back to top
        setStartAnimation(false);
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.div
      key={startAnimation ? "launch" : "ready"} // force re-render when resetting
      initial={{ x: 0, y: 0 }}
      animate={
        startAnimation
          ? {
              x: 800,       // launch right
              y: -1300,     // fly off top
              rotate: -49,
              scale: 0.9,   // optional realism
            }
          : {
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
            }
      }
      transition={{ duration: 2, ease: "easeInOut" }}
      className="fixed bottom-0 left-0 z-50 text-4xl pointer-events-none"
    >
      🚀
      {/* Smoke trail */}
      <div className="absolute left-1/2 top-full w-2 h-16 bg-white/40 blur-lg animate-pulse rounded-full" />
    </motion.div>
  );
};
