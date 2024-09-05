"use client";

import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionProps,
} from "framer-motion";
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
    <LayoutGroup>
      <motion.div
        layoutId={`card-${title}`}
        onClick={() => setIsOpen(true)}
        className="flex flex-col"
        initial={{
          position: "relative",
          minHeight: "500px",
          width: "100%",
          borderRadius: 30,
          overflow: "hidden",
          color: "white",
          zIndex: 95,
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
        />

        <motion.div
          layoutId={`content-expanded-${title}`}
          style={{
            color: "black",
            backgroundColor: "white",
            flexGrow: 0,
            flexBasis: 0,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></motion.div>
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
              // zIndex: 100,
              color: "white",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              zIndex: 100,
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
            />

            <motion.div
              layoutId={`content-expanded-${title}`}
              style={{
                color: "black",
                padding: "1.25rem",
                backgroundColor: "white",
                flexGrow: 1,
                zIndex: 90,
              }}
              // transition={{ delay: 0.3 }}
            >
              {/* this is the content */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};
