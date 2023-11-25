"use client";

import { useState } from "react";
import ImageGeneratorSidebar from "../components/ImageGeneratorSidebar";
import PageHeader from "../components/PageHeader";

type ImgProps = {
  title: string;
  desc: string;
  url: string;
  logoUrl: string;
  mainImgUrl: string;
};

type ImageTypeProps = {
  name: string;
  type: string;
};

const OgImageGenerator = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [ogImgUrl, setOgImgUrl] = useState<string>("/api/og");
  const [imgData, setImgData] = useState<ImgProps | null>(null);
  const [generatedImgUrl, setImageUrl] = useState<string>("/api/og");

  const types: ImageTypeProps[] = [
    {
      name: "Default",
      type: "default",
    },
    {
      name: "Split",
      type: "split",
    },
    {
      name: "Full image background",
      type: "fullImageBg",
    },
    {
      name: "Github",
      type: "github",
    },
  ];

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
    <>
      <PageHeader title="Generate OG image" />
      <section className="w-full md:max-w-screen-xl mx-auto sm:px-6 px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start lg:gap-8 md:gap-4 gap-4">
          <ImageGeneratorSidebar handleParamsUpdate={updateImage} />
          <div className="rounded-xl w-full py-4 md:px-6 px-4 bg-neutral-800 md:col-span-2">
            <div className="w-full flex flex-col gap-6">
              {types.map((type: ImageTypeProps, index: number) => (
                <div key={index} className="w-full flex flex-col gap-2">
                  <p className="text-neutral-200 font-medium text-lg">
                    {type.name}
                  </p>
                  <div className="group w-full overflow-hidden md:rounded-2xl rounded-xl relative">
                    {
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        className="w-full h-auto max-h-full object-cover object-center relative"
                        src={
                          ogImgUrl === "/api/og"
                            ? `${ogImgUrl}?type=${type.type}`
                            : `${ogImgUrl}&type=${type.type}`
                        }
                        alt={`${type.name} og preview`}
                      />
                    }
                    <div className="group-hover:grid hidden absolute w-full h-full bg-neutral-900/50 inset-0 transition-all duration-700 place-content-center place-items-center">
                      <a
                        href={
                          generatedImgUrl === "/api/og"
                            ? `${generatedImgUrl}?type=${type.type}`
                            : `${generatedImgUrl}&type=${type.type}`
                        }
                        target="_blank"
                        className="text-neutral-800 font-medium px-5 py-2 bg-neutral-100 rounded-full text-sm hover:text-neutral-100 hover:bg-neutral-900"
                      >
                        Open in new tab
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OgImageGenerator;
