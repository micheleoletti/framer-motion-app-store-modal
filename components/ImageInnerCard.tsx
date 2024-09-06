"use client";
import { motion } from "framer-motion";
import React from "react";
import { MagicCardProps, transition } from "./ExpandableCard";

export const ImageInnerCard = ({
  imageUrl,
  title,
  description,
  appIconUrl,
  appName,
  appDescription,
  isOpen,
  setIsOpen,
}: MagicCardProps & {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <motion.div
      layoutId={`inner-card-${title}`}
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <motion.img
        layoutId={`image-${title}`}
        src={imageUrl}
        alt={title}
        style={{
          aspectRatio: 9 / 11,
          objectFit: "fill",
          objectPosition: "center",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle, transparent, rgba(0, 0, 0, 0.5))",
        }}
      ></motion.div>
      <motion.div
        layoutId={`content-${title}`}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <motion.h1
          layoutId={`title-${title}`}
          layout="position"
          initial={{
            fontSize: "3rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            maxWidth: "60%",
            lineHeight: "0.9",
            padding: "0.75rem 1.25rem",
          }}
        >
          {title}
        </motion.h1>
        <motion.span
          layoutId={`description-${title}`}
          layout="position"
          style={{
            opacity: 0.8,
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
            paddingBottom: "1rem",
          }}
        >
          {description}
        </motion.span>

        <motion.div
          layoutId={`footer-${title}`}
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            padding: "0.75rem 1.25rem",
            gap: "1rem",
          }}
        >
          <motion.img
            layoutId={`app-icon-${title}`}
            src={appIconUrl}
            alt={title}
            width={42}
            height={42}
            initial={{ borderRadius: 12, overflow: "hidden" }}
          />
          <motion.div
            layoutId={`app-info-${title}`}
            style={{ display: "flex", flexDirection: "column", gap: "0" }}
          >
            <motion.span
              layoutId={`app-name-${title}`}
              style={{ fontWeight: "500" }}
              layout="position"
            >
              {appName}
            </motion.span>
            <motion.span
              layoutId={`app-description-${title}`}
              initial={{ opacity: 0.6, fontSize: "0.875rem" }}
              layout="position"
            >
              {appDescription}
            </motion.span>
          </motion.div>
          <motion.button
            layoutId={`get-button-${title}`}
            initial={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "9999px",
              padding: "0.5rem 1.25rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              marginLeft: "auto",
            }}
            layout="position"
          >
            Get
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
