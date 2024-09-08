import { HTMLMotionProps, motion } from "framer-motion";

interface CardFooterProps extends HTMLMotionProps<"div"> {
  title: string;
  appIconUrl: string;
  appName: string;
  appDescription: string;
}

export const CardFooter = ({
  title,
  appIconUrl,
  appName,
  appDescription,
  ...props
}: CardFooterProps) => {
  return (
    <motion.div
      layoutId={`card-footer-${title}`}
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: "0.75rem 1.25rem",
        gap: "1rem",
      }}
      {...props}
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
  );
};
