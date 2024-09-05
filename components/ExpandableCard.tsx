"use client";

import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useState } from "react";
import { ImageInnerCard } from "./ImageInnerCard";

export interface MagicCardProps {
  title: string;
  description: string;
  imageUrl: string;

  appIconUrl: string;
  appName: string;
  appDescription: string;
  // appLink: string;

  // cardContent: React.ReactNode;
}

const transition: MotionProps["transition"] = {
  type: "spring",
  damping: 20,
  stiffness: 150,
  // duration: 25,
};

export const ExpandableCard = ({
  imageUrl,
  title,
  description,
  appIconUrl,
  appName,
  appDescription,
}: MagicCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        layoutId={`card-${title}`}
        onClick={() => setIsOpen(true)}
        initial={{
          position: "relative",
          aspectRatio: 9 / 11,
          width: "100%",
          borderRadius: 30,
          overflow: "hidden",
          color: "white",
          backgroundColor: "white",
          opacity: 1,
        }}
        animate={{
          zIndex: isOpen ? 10 : 1,
        }}
        transition={{
          ...transition,
          zIndex: { delay: isOpen ? 0 : 0.3 }, // Delay z-index change when closing
        }}
        layout
      >
        <ImageInnerCard
          imageUrl={imageUrl}
          title={title}
          description={description}
          appIconUrl={appIconUrl}
          appName={appName}
          appDescription={appDescription}
          isOpen={isOpen}
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            layoutId={`card-${title}`}
            onClick={() => setIsOpen(false)}
            initial={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              borderRadius: 0,
              color: "white",
              overflow: "hidden",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              opacity: 1,
              zIndex: 10,
            }}
            transition={transition}
            layout
          >
            <ImageInnerCard
              imageUrl={imageUrl}
              title={title}
              description={description}
              appIconUrl={appIconUrl}
              appName={appName}
              appDescription={appDescription}
              isOpen={isOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
