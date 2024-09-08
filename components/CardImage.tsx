import { motion } from "framer-motion";
import { title } from "process";

interface CardImageProps {
  imageUrl: string;
  title: string;
}

export const CardImage = ({ imageUrl, title }: CardImageProps) => {
  return (
    <>
      <motion.img
        className="w-full h-full absolute top-0 left-0 overflow-hidden"
        style={{ borderRadius: 0, aspectRatio: 9 / 11 }}
        layoutId={`image-${title}`}
        src={imageUrl}
      />

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at center top, transparent, rgba(0, 0, 0, 0.4))",
        }}
      ></motion.div>
    </>
  );
};
