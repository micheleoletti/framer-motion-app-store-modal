import { HTMLMotionProps, motion } from "framer-motion";

interface CardImageProps extends HTMLMotionProps<"img"> {
  imageUrl: string;
}

export const CardImage = ({
  imageUrl,
  className,
  ...props
}: CardImageProps) => {
  return (
    <>
      <motion.img
        className={`w-full h-full absolute top-0 left-0 overflow-hidden ${className}`}
        style={{ borderRadius: 0, aspectRatio: 9 / 11 }}
        layoutId="card-image"
        src={imageUrl}
        {...props}
      />

      <motion.div
        layoutId="card-image-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at center top, transparent, rgba(0, 0, 0, 0.4))",
        }}
        className={className}
      ></motion.div>
    </>
  );
};
