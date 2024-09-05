"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const TestComponent = () => {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <>
      <motion.div
        layoutId="square"
        onClick={() => setIsTapped(true)}
        style={{
          width: "100%",
          height: 500,
          borderRadius: 30,
        }}
      ></motion.div>

      <AnimatePresence>
        {isTapped && (
          <motion.div
            layoutId="square"
            onClick={() => setIsTapped(false)}
            style={{
              width: 200,
              height: 200,
              position: "fixed",
              top: 0,
              left: 0,
              borderRadius: 0,
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
