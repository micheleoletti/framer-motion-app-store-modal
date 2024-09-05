"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

export const MagicCard = ({
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
        layoutId="card"
        onClick={() => setIsOpen(true)}
        style={{
          height: "500px",
          width: "100%",
          borderRadius: 30,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/50 z-[-5]"></div>
        <div className="flex flex-col justify-end z-30 h-full bottom-0 absolute p-5">
          <h1 className="text-5xl font-bold uppercase max-w-[50%] leading-[0.9]">
            {title}
          </h1>
          <span className="opacity-80">{description}</span>
        </div>
        <div className="items-center w-full bg-black/20 flex p-3 px-5 gap-4 absolute bottom-0">
          <Image
            src={appIconUrl}
            alt={title}
            width={42}
            height={42}
            className="rounded-lg overflow-hidden"
          />
          <div className="space-y-0 flex flex-col">
            <span className="font-medium">{appName}</span>
            <span className="text-sm opacity-60">{appDescription}</span>
          </div>
          <button className="bg-white/20 rounded-full px-5 py-2 text-sm font-medium ml-auto hover:bg-white/30 transition-all">
            Get
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            layoutId="card"
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              borderRadius: 0,
              zIndex: 100,
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/50 z-[-5]"></div>
            <div className="flex flex-col justify-end z-30 h-full bottom-0 absolute p-5">
              <h1 className="text-5xl font-bold uppercase max-w-[50%] leading-[0.9]">
                {title}
              </h1>
              <span className="opacity-80">{description}</span>
            </div>
            <div className="items-center w-full bg-black/20 flex p-3 px-5 gap-4 absolute bottom-0">
              <Image
                src={appIconUrl}
                alt={title}
                width={42}
                height={42}
                className="rounded-lg overflow-hidden"
              />
              <div className="space-y-0 flex flex-col">
                <span className="font-medium">{appName}</span>
                <span className="text-sm opacity-60">{appDescription}</span>
              </div>
              <button className="bg-white/20 rounded-full px-5 py-2 text-sm font-medium ml-auto hover:bg-white/30 transition-all">
                Get
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
