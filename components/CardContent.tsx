import { HTMLMotionProps, motion } from "framer-motion";

interface CardContentProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export const CardContent = ({ children, ...props }: CardContentProps) => {
  return (
    <motion.div
      layoutId="card-content"
      layout={"position"}
      className="text-black text-xl p-5 "
      {...props}
    >
      {children}
    </motion.div>
  );
};
