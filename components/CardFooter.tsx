import { HTMLMotionProps, motion } from "framer-motion";

interface CardFooterProps extends HTMLMotionProps<"div"> {
  appIconUrl: string;
  appName: string;
  appDescription: string;
}

export const CardFooter = ({
  appIconUrl,
  appName,
  appDescription,
  ...props
}: CardFooterProps) => {
  return (
    <motion.div
      layoutId="card-footer"
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
        layoutId="app-icon"
        src={appIconUrl}
        width={42}
        height={42}
        initial={{ borderRadius: 12, overflow: "hidden" }}
      />
      <motion.div
        layoutId="app-info"
        style={{ display: "flex", flexDirection: "column", gap: "0" }}
      >
        <motion.span
          layoutId="app-name"
          style={{ fontWeight: "500" }}
          layout="position"
        >
          {appName}
        </motion.span>
        <motion.span
          layoutId="app-description"
          initial={{ opacity: 0.6, fontSize: "0.875rem" }}
          layout="position"
        >
          {appDescription}
        </motion.span>
      </motion.div>
      <motion.button
        layoutId="get-button"
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
