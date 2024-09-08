"use client";

import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionProps,
  MotionStyle,
} from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";
import { CardFooter } from "./CardFooter";
import { CardTitle } from "./CardTitle";
import { CardImage } from "./CardImage";
import { CardContent } from "./CardContent";
import { CardCloseButton } from "./CardCloseButton";

export interface ExpandableModalCard extends PropsWithChildren {
  title: string;
  description: string;
  imageUrl: string;

  appIconUrl: string;
  appName: string;
  appDescription: string;
  // appLink: string;
}

const springTransition: MotionProps["transition"] = {
  type: "spring",
  damping: 20,
  stiffness: 150,
};

const closedCardStyle: MotionStyle = {
  position: "relative",
  width: "100%",
  borderRadius: 30,
  overflow: "hidden",
  flexShrink: 0,
  backgroundColor: "white",
};

const openCardStyle: MotionStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: 0,
  overflow: "scroll",
  backgroundColor: "white",
};

const imageContainerStyle: MotionStyle = {
  position: "relative",
  top: 0,
  left: 0,
  width: "100%",
  aspectRatio: 9 / 11,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  color: "white",
  overflow: "hidden",
};

export const ExpandableModalCard = ({
  title,
  description,
  imageUrl,
  appIconUrl,
  appName,
  appDescription,
  children,
}: ExpandableModalCard) => {
  const [isOpen, setIsOpen] = useState(false);
  const [zIndex, setZIndex] = useState(10);

  useEffect(() => {
    if (isOpen) {
      setZIndex(20);
    } else {
      const timer = setTimeout(() => setZIndex(10), 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <LayoutGroup id={imageUrl}>
      <motion.div
        className="font-sans"
        style={{ ...closedCardStyle, zIndex }}
        layoutId="card"
        onClick={() => setIsOpen(true)}
        transition={springTransition}
        layout
        whileTap={{ scale: 0.98 }}
      >
        <motion.div layoutId="image-card" style={{ ...imageContainerStyle }}>
          <CardCloseButton
            className="absolute top-4 right-4"
            style={{ opacity: 0 }}
          />

          <CardImage className="z-10" imageUrl={imageUrl} />

          <CardTitle
            layout="position"
            className="z-10"
            title={title}
            subtitle={description}
          />

          <CardFooter
            className="z-10"
            title={title}
            appIconUrl={appIconUrl}
            appName={appName}
            appDescription={appDescription}
          />
        </motion.div>

        <CardContent style={{ opacity: 0, height: "0px", padding: 0 }}>
          {children}
        </CardContent>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            style={{ ...openCardStyle, zIndex }}
            layoutId="card"
            onClick={() => setIsOpen(false)}
            transition={springTransition}
          >
            <motion.div
              layoutId="image-card"
              style={{ ...imageContainerStyle }}
            >
              <CardCloseButton
                className="absolute top-4 right-4 z-30"
                style={{ opacity: 1 }}
              />

              <CardImage className="z-20" imageUrl={imageUrl} />

              <CardTitle
                layout="position"
                className="z-20"
                title={title}
                subtitle={description}
              />

              <CardFooter
                className="z-20"
                title={title}
                appIconUrl={appIconUrl}
                appName={appName}
                appDescription={appDescription}
              />
            </motion.div>

            <CardContent style={{ opacity: 1, height: "auto" }} title={title}>
              {children}
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};
