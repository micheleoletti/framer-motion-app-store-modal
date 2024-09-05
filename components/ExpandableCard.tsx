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

        {/* <motion.div
          layoutId={`content-expanded-${title}`}
          style={{
            color: "black",
            backgroundColor: "white",
            flexGrow: 0,
            flexBasis: 0,
            position: "absolute",
            top: 0,
            left: 0,
            aspectRatio: 9 / 11,
            width: "100%",
            zIndex: -5,
          }}
        ></motion.div> */}
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
              zIndex: 0,
              opacity: 1,
            }}
            transition={transition}
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

            {/* <motion.div
              layoutId={`content-expanded-${title}`}
              style={{
                color: "black",
                padding: "1.25rem",
                backgroundColor: "white",
                flexGrow: 1,
                zIndex: -5,
              }}
              // transition={{ delay: 0.3 }}
            >
            </motion.div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
