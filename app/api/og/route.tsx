/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import LogoIcon from "@/app/components/icons/Logo";
import Globe from "@/app/components/illustrations/Globe";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const regularFont = await fetch(
    new URL("../../assets/fonts/BeVietnamPro-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const mediumFont = await fetch(
    new URL("../../assets/fonts/BeVietnamPro-Medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const blackFont = await fetch(
    new URL("../../assets/fonts/BeVietnamPro-Black.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const url = request.url;
  const { searchParams } = new URL(url);

  const description: string | null = searchParams.get("desc");
  const logo: string | null = searchParams.get("logo");
  const logoRatio: string | null = searchParams.get("logoRatio");
  const mainImage: string | null = searchParams.get("mainImage");
  const title: string | null = searchParams.get("title");
  const type: string | null = searchParams.get("type");
  const website: string | null = searchParams.get("url");
  // const type: "default" | "rauchg" | "github" = searchParams.get("type");

  const renderDefault = () => {
    return (
      <div
        tw="flex flex-col w-full h-full p-16 items-center justify-center mx-auto overflow-hidden"
        style={{
          backgroundColor: "#f7f6f2",
          fontFamily: "BeVietnamPro",
        }}
      >
        <div tw="flex w-full h-full mt-5 mx-auto">
          <div tw="w-full flex flex-col items-start">
            {logo ? (
              <img
                src={logo}
                tw={`${
                  logoRatio
                    ? `w-[${parseInt(logoRatio.split(":")[0]) * 50}px] h-[${
                        parseInt(logoRatio.split(":")[1]) * 50
                      }px]`
                    : "w-[50px] h-[50px]"
                }`}
              />
            ) : (
              <LogoIcon />
            )}
            <div tw="w-full flex items-start justify-between flex-1">
              <div tw="flex flex-col max-w-lg w-1/2 justify-start pt-6">
                <h1 tw="text-neutral-900 font-black text-3xl mb-0">
                  {title
                    ? title.length >= 90
                      ? `${title.slice(0, 90)}...`
                      : title
                    : "Meta Tags Extractor"}
                </h1>
                <p tw="text-neutral-800 text-xl font-medium mt-4">
                  {description
                    ? description.length >= 300
                      ? `${description.slice(0, 300)}...`
                      : description
                    : "Extract meta tags from any URL"}
                </p>
              </div>
              <div tw="w-1/2 flex justify-end">
                <div tw="flex w-full h-full justify-end">
                  <img
                    tw="mx-auto w-[500px] h-[400px] rounded-xl"
                    src={
                      mainImage
                        ? mainImage
                        : "https://images.unsplash.com/photo-1641808890181-fb0ca79e0018?q=80&w=800&auto=format&fit=crop"
                    }
                    alt="main image"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
            <div tw="flex w-full justify-start">
              <span tw="font-medium text-sm text-neutral-600">
                {website ? website : "www.example.com"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSplitOg = () => {
    return (
      <div tw="flex w-full h-full bg-[#0a0909]">
        <div tw="flex w-1/2 relative">
          <div tw="relative flex inset-0 w-full h-full">
            <img
              src={
                mainImage
                  ? mainImage
                  : "https://images.unsplash.com/photo-1641808890181-fb0ca79e0018?q=80&w=800&auto=format&fit=crop"
              }
              alt="main image"
              tw="w-full h-full"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
        <div tw="flex w-1/2 p-16 relative">
          <div tw="flex flex-col w-full h-full items-start justify-center">
            <h2 tw="text-4xl font-black text-neutral-100 mb-2">
              {title ? title : "Sample title"}
            </h2>
            <p tw="text-xl font-medium text-neutral-300 mt-0">
              {description
                ? description.length >= 300
                  ? `${description.slice(0, 300)}...`
                  : description
                : "Extract meta tags from any URL"}
            </p>
          </div>
          <div tw="flex absolute top-8 left-16">
            {logo ? (
              <img
                src={logo}
                tw={`${
                  logoRatio
                    ? `w-[${parseInt(logoRatio.split(":")[0]) * 50}px] h-[${
                        parseInt(logoRatio.split(":")[1]) * 50
                      }px]`
                    : "w-[50px] h-[50px]"
                }`}
              />
            ) : (
              <LogoIcon />
            )}
          </div>
          <div tw="flex absolute bottom-8 left-16">
            <span tw="text-neutral-100 font-medium text-sm text-neutral-400">
              {website ? website : "www.example.com"}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderGithubStyleOg = () => {
    return (
      <div
        tw="flex w-full h-full rounded-xl p-1"
        style={{
          backgroundImage:
            "linear-gradient(140deg, #86efac 0%, #3b82f6 50%, #9333ea 75%)",
        }}
      >
        <div tw="flex relative w-full bg-white rounded-[10px] py-6">
          <div tw="flex w-full flex-col my-auto px-20">
            <span tw="text-gray-500 text-base">
              {title ? title : "Sample title"}
            </span>
            <h2 tw="text-5xl text-gray-900 mt-0.5 font-black">
              {description
                ? description.length >= 150
                  ? `${description.slice(0, 150)}...`
                  : description
                : "Extract meta tags from any URL"}
            </h2>
          </div>
          <div tw="w-full absolute bottom-12 flex items-center justify-between px-20 mx-auto">
            <div tw="flex items-center justify-start">
              <div tw="w-16 h-16 flex items-center justify-center rounded-full bg-gray-800 overflow-hidden border-2 border-gray-800 mr-3">
                <img
                  src={
                    mainImage
                      ? mainImage
                      : "https://images.unsplash.com/photo-1641808890181-fb0ca79e0018?q=80&w=800&auto=format&fit=crop"
                  }
                  alt="main image"
                  tw="w-full h-full"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <span tw="text-gray-700 text-base">
                {website ? website : "www.example.com"}
              </span>
            </div>
            {logo ? (
              <img
                src={logo}
                tw={`${
                  logoRatio
                    ? `w-[${parseInt(logoRatio.split(":")[0]) * 50}px] h-[${
                        parseInt(logoRatio.split(":")[1]) * 50
                      }px]`
                    : "w-[50px] h-[50px]"
                }`}
              />
            ) : (
              <LogoIcon />
            )}
          </div>
        </div>
      </div>
    );
  };

  const fullImageBg = () => {
    return (
      <div tw="flex w-full h-full bg-[#0a0909] relative">
        <div tw="relative flex inset-0 w-full h-full">
          <img
            src={
              mainImage
                ? mainImage
                : "https://images.unsplash.com/photo-1641808890181-fb0ca79e0018?q=80&w=800&auto=format&fit=crop"
            }
            alt="main image"
            tw="w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div tw="flex w-full h-full absolute inset-0 bg-black/50" />
          <div tw="flex absolute top-8 left-8">
            {logo ? (
              <img
                src={logo}
                tw={`${
                  logoRatio
                    ? `w-[${parseInt(logoRatio.split(":")[0]) * 50}px] h-[${
                        parseInt(logoRatio.split(":")[1]) * 50
                      }px]`
                    : "w-[50px] h-[50px]"
                }`}
              />
            ) : (
              <LogoIcon />
            )}
          </div>
          <div tw="flex w-full items-end justify-between p-16 absolute bottom-0 px-16">
            <div tw="flex w-1/2">
              <span tw="text-neutral-100 font-medium text-sm text-neutral-400">
                {website ? website : "www.example.com"}
              </span>
            </div>
            <div tw="flex flex-col w-1/2 items-end justify-center">
              <h2 tw="text-7xl font-black text-neutral-100 text-right">
                {title
                  ? title.length >= 25
                    ? `${title.slice(0, 25)}...`
                    : title
                  : "Sample title"}
              </h2>
              <p tw="text-lg font-medium text-neutral-300 text-right max-w-sm mt-0">
                {description
                  ? description.length >= 150
                    ? `${description.slice(0, 150)}...`
                    : description
                  : "Extract meta tags from any URL"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return new ImageResponse(
    type === "default"
      ? renderDefault()
      : type === "split"
      ? renderSplitOg()
      : type === "fullImageBg"
      ? fullImageBg()
      : type === "github"
      ? renderGithubStyleOg()
      : renderDefault(),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "BeVietnamPro",
          data: regularFont,
          style: "normal",
          weight: 400,
        },
        {
          name: "BeVietnamPro",
          data: mediumFont,
          style: "normal",
          weight: 500,
        },
        {
          name: "BeVietnamPro",
          data: blackFont,
          style: "normal",
          weight: 900,
        },
      ],
    }
  );
}
