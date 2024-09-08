import { HTMLMotionProps, motion } from "framer-motion";

interface CardTitleProps extends HTMLMotionProps<"div"> {
  title: string;
  subtitle: string;
}

export const CardTitle = ({
  title,
  subtitle,
  className,
  ...props
}: CardTitleProps) => {
  return (
    <motion.div
      className={`${className} p-6`}
      {...props}
      layoutId={`card-title-${title}`}
    >
      <motion.h1 className="text-4xl font-bold">{title}</motion.h1>
      <motion.p className="text-sm text-white/60">{subtitle}</motion.p>
    </motion.div>
  );
};
