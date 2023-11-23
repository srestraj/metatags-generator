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
                  logoRatio === "1:1"
                    ? "w-[50px] h-[50px]"
                    : logoRatio === "2:1"
                    ? "w-[100px] h-[50px]"
                    : logoRatio === "3:1"
                    ? "w-[150px] h-[50px]"
                    : "w-[100px] h-[50px]"
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
                  {mainImage ? (
                    <img
                      tw="mx-auto w-[500px] h-[400px] rounded-xl"
                      src={mainImage}
                      alt="sample image"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Globe />
                  )}
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
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-.02em",
          fontWeight: 700,
          background: "white",
        }}
      >
        <div
          style={{
            left: 42,
            top: 42,
            position: "absolute",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              width: 24,
              height: 24,
              background: "black",
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontSize: 20,
            }}
          >
            rauchg.com
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "20px 50px",
            margin: "0 42px",
            fontSize: 40,
            width: "auto",
            maxWidth: 550,
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            lineHeight: 1.4,
          }}
        >
          {title ? title : "Meta Tags Extractor"}
        </div>
      </div>
    );
  };

  return new ImageResponse(
    type === "default"
      ? renderDefault()
      : type === "split"
      ? renderSplitOg()
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
