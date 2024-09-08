import { HTMLMotionProps, motion } from "framer-motion";

interface CardCloseButtonProps extends HTMLMotionProps<"div"> {}

export const CardCloseButton = ({
  className,
  ...props
}: CardCloseButtonProps) => {
  return (
    <motion.div
      layout
      layoutId={`close-button`}
      style={{
        opacity: 1,
      }}
      className={`absolute top-4 right-4 bg-black/25 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm z-20 ${className}`}
      {...props}
    >
      <motion.img
        layoutId={`close-button-icon`}
        src="/x-icon.png"
        alt="Close"
        style={{
          opacity: 0.4,
        }}
        className="w-4 h-4 aspect-square"
      />
    </motion.div>
  );
};
