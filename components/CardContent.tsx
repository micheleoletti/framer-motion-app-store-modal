import { HTMLMotionProps, motion } from "framer-motion";

interface CardContentProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  title: string;
}

export const CardContent = ({
  children,
  title,
  ...props
}: CardContentProps) => {
  return (
    <motion.div
      layoutId={`card-content-${title}`}
      layout={"position"}
      className="text-black text-xl p-5 bg-white"
      {...props}
    >
      {children}
    </motion.div>
  );
};
