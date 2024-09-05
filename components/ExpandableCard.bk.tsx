"use client";

import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { useState } from "react";

interface MagicCardProps {
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
  damping: 18,
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
    <>
      <motion.div
        layoutId={`card-${title}`}
        onClick={() => setIsOpen(true)}
        initial={{
          minHeight: "500px",
          width: "100%",
          borderRadius: 30,
          overflow: "hidden",
          color: "white",
        }}
        transition={transition}
        layout
      >
        <motion.div
          style={{
            height: "500px",
            position: "relative",
          }}
        >
          <motion.img
            src={imageUrl}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            initial={{ opacity: 1 }}
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
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              position: "absolute",
              bottom: 0,
              width: "100%",
            }}
          >
            <motion.h1
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
                src={appIconUrl}
                alt={title}
                width={42}
                height={42}
                initial={{ borderRadius: "0.5rem", overflow: "hidden" }}
              />
              <motion.div
                style={{ display: "flex", flexDirection: "column", gap: "0" }}
              >
                <motion.span style={{ fontWeight: "500" }}>
                  {appName}
                </motion.span>
                <motion.span initial={{ opacity: 0.6, fontSize: "0.875rem" }}>
                  {appDescription}
                </motion.span>
              </motion.div>
              <motion.button
                initial={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "9999px",
                  padding: "0.5rem 1.25rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  marginLeft: "auto",
                }}
              >
                Get
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
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
              zIndex: 100,
            }}
            transition={transition}
            layout
          >
            <motion.div
              style={{
                height: "500px",
                position: "relative",
              }}
            >
              <motion.img
                src={imageUrl}
                alt={title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
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
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                }}
              >
                <motion.h1
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
                    src={appIconUrl}
                    alt={title}
                    width={42}
                    height={42}
                    initial={{ borderRadius: "0.5rem", overflow: "hidden" }}
                  />
                  <motion.div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0",
                    }}
                  >
                    <motion.span style={{ fontWeight: "500" }}>
                      {appName}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0.6, fontSize: "0.875rem" }}
                    >
                      {appDescription}
                    </motion.span>
                  </motion.div>
                  <motion.button
                    initial={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "9999px",
                      padding: "0.5rem 1.25rem",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      marginLeft: "auto",
                    }}
                  >
                    Get
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              style={{
                color: "black",
                padding: "1.25rem",
                backgroundColor: "white",
                flexGrow: 1,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              this is the content
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
