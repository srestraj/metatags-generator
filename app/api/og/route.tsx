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
  const title: string | null = searchParams.get("title");
  const description: string | null = searchParams.get("desc");
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
            <LogoIcon />
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
                  {/* <img
                    width="100"
                    height="100"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
                    alt="sample image"
                  /> */}
                  <Globe />
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
