"use client";

import { useRef, useState } from "react";
import ArrowUp from "./icons/ArrowUp";

type GeneratorSidebarProps = {
  handleParamsUpdate: (
    title: string,
    desc: string,
    url: string,
    logoUrl: string,
    mainImgUrl: string,
    logoRatio: string
  ) => void;
};

const CLOUD_NAME: string | undefined = process.env.NEXT_PUBLIC_CLOUD_NAME;
const UPLOAD_PRESET: string | undefined = process.env.NEXT_PUBLIC_UPLOAD_PRESET;

const ImageGeneratorSidebar = ({
  handleParamsUpdate,
}: GeneratorSidebarProps) => {
  const [title, setTitle] = useState<string>("Meta Tags Extractor");
  const [description, setDescription] = useState<string>(
    "Extract meta tags from any URL"
  );
  const [url, setUrl] = useState<string>("www.example.com");
  const [logoUrlInput, setLogoUrlInput] = useState<boolean>(false);
  const [mainImgUrlInput, setMainImgUrlInput] = useState<boolean>(false);
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [mainImageUrl, setMainImageUrl] = useState<string>("");
  const [logoRatio, setLogoRatio] = useState<string>("1:1");

  const logoInput = useRef<HTMLInputElement | null>(null);
  const mainImageInput = useRef<HTMLInputElement | null>(null);
  const imageHolder = useRef<HTMLDivElement | null>(null);
  const logoHolder = useRef<HTMLDivElement | null>(null);

  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleRatioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogoRatio(event.target.value);
  };

  const uploadImage = async (image: File) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET ? UPLOAD_PRESET : "");

    const result = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        return data.secure_url;
      })
      .catch((error) => {
        console.error("Error uploading the file:", error);
      });

    return result;
  };

  const handleFileInput = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files?.length && imageHolder.current) {
      const result = await uploadImage(event.target.files[0]);
      setMainImageUrl(result);
    }
  };

  const handleLogoInput = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files?.length && logoHolder.current) {
      const result = await uploadImage(event.target.files[0]);
      setLogoUrl(result);
    }
  };

  const handleLogoUrlInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogoUrl(event.target.value);
  };

  const handleMainImgUrlInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMainImageUrl(event.target.value);
  };

  const triggerFileUpload = () => {
    mainImageInput?.current?.click();
  };

  const triggerLogoUpload = () => {
    logoInput?.current?.click();
  };

  return (
    <div className="w-full bg-neutral-800 p-4 rounded-xl flex flex-col gap-5 md:sticky md:top-8">
      <div className="w-full">
        <label
          htmlFor="logoImg"
          className="text-neutral-300 w-full flex items-center justify-between mb-2"
        >
          <span>Logo</span>
          {logoUrlInput && (
            <button
              onClick={() => setLogoUrlInput(false)}
              type="button"
              className="text-sm text-neutral-400 hover:text-neutral-300 hover:underline"
            >
              Add image instead
            </button>
          )}
        </label>
        {logoUrlInput ? (
          <input
            type="url"
            id="logoImg"
            defaultValue={logoUrl}
            onInput={handleLogoUrlInput}
            className="
              w-full
              bg-transparent
              text-neutral-200
              focus:outline-none
              border
              border-neutral-600
              focus:border-[#b4ff5c]
              p-2
              rounded-lg
              transition-all
              duration-300
            "
          />
        ) : (
          <div
            ref={logoHolder}
            className="w-full relative py-20 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden bg-cover bg-no-repeat bg-center bg-blend-overlay"
            style={{ backgroundImage: logoUrl ? `url(${logoUrl})` : "" }}
          >
            <div className="absolute inset-0 w-full h-full bg-neutral-900/50 grid place-content-center place-items-center gap-2">
              <button
                onClick={triggerLogoUpload}
                className="w-12 h-12 group hover:bg-neutral-100/60 rounded-full bg-neutral-300/50 inline-flex items-center justify-center transition-all duration-300"
              >
                <ArrowUp classNames="fill-[#b4ff5c] w-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:fill-neutral-700" />
              </button>
              <span className="lg:text-base text-sm text-neutral-200">
                Add image or{" "}
                <button
                  onClick={() => setLogoUrlInput(true)}
                  type="button"
                  className="hover:underline underline-offset-4"
                >
                  Enter URL
                </button>
              </span>
              <input
                type="file"
                accept=".jpg, .jpeg, .png, .svg"
                className="hidden"
                ref={logoInput}
                onChange={handleLogoInput}
              />
            </div>
          </div>
        )}
      </div>

      <div className="w-full">
        <label
          htmlFor="mainImg"
          className="text-neutral-300 w-full flex items-center justify-between mb-2"
        >
          <span>Main image</span>
          {mainImgUrlInput && (
            <button
              onClick={() => setMainImgUrlInput(false)}
              type="button"
              className="text-sm text-neutral-400 hover:text-neutral-300 hover:underline"
            >
              Add image instead
            </button>
          )}
        </label>
        {mainImgUrlInput ? (
          <input
            type="url"
            id="mainImg"
            defaultValue={mainImageUrl}
            onInput={handleMainImgUrlInput}
            className="
              w-full
              bg-transparent
              text-neutral-200
              focus:outline-none
              border
              border-neutral-600
              focus:border-[#b4ff5c]
              p-2
              rounded-lg
              transition-all
              duration-300
            "
          />
        ) : (
          <div
            ref={imageHolder}
            className="w-full relative py-28 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden bg-cover bg-no-repeat bg-center bg-blend-overlay"
            style={{
              backgroundImage: mainImageUrl ? `url(${mainImageUrl})` : "",
            }}
          >
            <div className="absolute inset-0 w-full h-full bg-neutral-900/50 grid place-content-center place-items-center gap-2">
              <button
                onClick={triggerFileUpload}
                className="w-12 h-12 group hover:bg-neutral-100/60 rounded-full bg-neutral-300/50 inline-flex items-center justify-center transition-all duration-300"
              >
                <ArrowUp classNames="fill-[#b4ff5c] w-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:fill-neutral-700" />
              </button>
              <span className="lg:text-base text-sm text-neutral-200">
                Add image or{" "}
                <button
                  onClick={() => setMainImgUrlInput(true)}
                  type="button"
                  className="hover:underline underline-offset-4"
                >
                  Enter URL
                </button>
              </span>
              <input
                type="file"
                accept=".jpg, .jpeg, .png, .svg"
                className="hidden"
                ref={mainImageInput}
                onChange={handleFileInput}
              />
            </div>
          </div>
        )}
      </div>

      <div className="w-full">
        <label
          htmlFor="title"
          className="text-neutral-300 w-full flex items-center justify-between mb-2"
        >
          <span>Title</span>
          <span className="text-xs text-neutral-600">{title.length}/90</span>
        </label>
        <textarea
          id="title"
          className="
            w-full
            bg-transparent
            text-neutral-200
            focus:outline-none
            border
            border-neutral-600
            focus:border-[#b4ff5c]
            p-2
            rounded-lg
            transition-all
            duration-300
            custom-scrollbar
          "
          cols={30}
          rows={4}
          defaultValue={title}
          onInput={handleTitleChange}
          maxLength={90}
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="description"
          className="text-neutral-300 w-full flex items-center justify-between mb-2"
        >
          <span>Description</span>
          <span className="text-xs text-neutral-600">
            {description.length}/300
          </span>
        </label>
        <textarea
          id="description"
          className="
              w-full
              bg-transparent
              text-neutral-200
              focus:outline-none
              border
              border-neutral-600
              focus:border-[#b4ff5c]
              p-2
              rounded-lg
              transition-all
              duration-300
              custom-scrollbar
            "
          cols={30}
          rows={7}
          defaultValue={description}
          onInput={handleDescriptionChange}
          maxLength={300}
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="description"
          className="text-neutral-300 inline-block mb-2"
        >
          URL
        </label>
        <input
          type="text"
          className="
              w-full
              bg-transparent
              text-neutral-200
              focus:outline-none
              border
              border-neutral-600
              focus:border-[#b4ff5c]
              px-2
              py-2.5
              rounded-lg
              transition-all
              duration-300
              custom-scrollbar
            "
          defaultValue={url}
          onInput={handleUrlChange}
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="logoRatio"
          className="text-neutral-300 inline-block mb-2"
        >
          Logo ratio
        </label>
        <input
          type="text"
          className="
              w-full
              bg-transparent
              text-neutral-200
              focus:outline-none
              border
              border-neutral-600
              focus:border-[#b4ff5c]
              px-2
              py-2.5
              rounded-lg
              transition-all
              duration-300
              custom-scrollbar
            "
          defaultValue={logoRatio}
          onInput={handleRatioChange}
        />
      </div>

      <button
        type="button"
        className="w-full bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 rounded-lg py-2 px-4 transition-all duration-300"
        onClick={() =>
          handleParamsUpdate(
            title,
            description,
            url,
            logoUrl,
            mainImageUrl,
            logoRatio
          )
        }
      >
        Update image
      </button>
    </div>
  );
};

export default ImageGeneratorSidebar;
