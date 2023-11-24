"use client";

import { useState } from "react";
import ImageGeneratorSidebar from "../components/ImageGeneratorSidebar";
import Image from "next/image";

type ImgProps = {
  title: string;
  desc: string;
  url: string;
  logoUrl: string;
  mainImgUrl: string;
};

const OgImageGenerator = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [ogImgUrl, setOgImgUrl] = useState<string>("/api/og");
  const [imgData, setImgData] = useState<ImgProps | null>(null);
  const [generatedImgUrl, setImageUrl] = useState<string>("/api/og");

  const updateImage = async (
    title: string,
    desc: string,
    url: string,
    logoUrl: string,
    mainImgUrl: string,
    logoRatio: string
  ) => {
    setImgData({
      title,
      desc,
      url,
      logoUrl,
      mainImgUrl,
    });
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await setOgImgUrl(
        `/api/og?title=${title}&desc=${desc}&url=${url}&logo=${logoUrl}&mainImage=${mainImgUrl}&logoRatio=${logoRatio}`
      );
      setImageUrl(
        `/api/og?title=${title}&desc=${desc}&url=${url}&logo=${logoUrl}&mainImage=${mainImgUrl}&logoRatio=${logoRatio}`
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full md:max-w-screen-xl mx-auto sm:px-6 px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 items-start lg:gap-8 md:gap-4 gap-4">
        <ImageGeneratorSidebar handleParamsUpdate={updateImage} />
        <div className="rounded-xl w-full py-4 md:px-6 px-4 bg-neutral-800 md:col-span-2">
          <div className="w-full flex flex-col gap-6">
            <div className="group w-full overflow-hidden rounded-xl relative">
              <Image
                width={800}
                height={400}
                src={ogImgUrl}
                alt="OG image preview"
                className="object-cover object-center relative"
              />
              <div className="group-hover:grid hidden absolute w-full h-full bg-neutral-900/50 inset-0 transition-all duration-700 place-content-center place-items-center">
                <a
                  href={generatedImgUrl}
                  target="_blank"
                  className="text-neutral-800 font-medium px-5 py-2 bg-neutral-100 rounded-full text-sm hover:text-neutral-100 hover:bg-neutral-900"
                >
                  View original
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OgImageGenerator;
