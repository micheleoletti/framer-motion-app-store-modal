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
    <motion.div className={`${className} p-6`} {...props} layoutId="card-title">
      <motion.h1 className="text-4xl font-bold">{title}</motion.h1>
      <motion.p className="text-white/70">{subtitle}</motion.p>
    </motion.div>
  );
};
