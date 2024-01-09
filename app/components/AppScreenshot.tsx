"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

type AppScreenshotProps = {
  imageUrl: string;
};

const AppScreenshot = ({ imageUrl }: AppScreenshotProps) => {
  return (
    <div className="w-full px-6 py-16 overflow-hidden">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.5}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="20px"
        className="mx-auto max-w-screen-xl overflow-hidden rounded-2xl border-4 border-neutral-700 shadow-xl"
      >
        <Image
          src={imageUrl}
          width={1200}
          height={800}
          alt="app demo screenshot"
          className="w-full h-full"
        />
      </Tilt>
    </div>
  );
};

export default AppScreenshot;
