"use client";

import { useState } from "react";
import ImageGeneratorSidebar from "../components/ImageGeneratorSidebar";
import Image from "next/image";

const OgImageGenerator = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [ogImgUrl, setOgImgUrl] = useState<string>("/api/og");

  const updateImageText = async (title: string, desc: string, url: string) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await setOgImgUrl(`/api/og?title=${title}&desc=${desc}&url=${url}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full md:max-w-screen-xl mx-auto sm:px-6 px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start lg:gap-8 md:gap-4 gap-4">
        <ImageGeneratorSidebar handleTextChange={updateImageText} />
        <div className="rounded-xl w-full py-4 md:px-6 px-4 bg-neutral-800 md:col-span-2">
          <div className="w-full flex flex-col gap-6">
            <div className="w-full overflow-hidden rounded-xl">
              <Image
                width={800}
                height={400}
                src={ogImgUrl}
                alt="OG image preview"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OgImageGenerator;
