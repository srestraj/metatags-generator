"use client";

import { useRef, useState } from "react";
import ArrowUp from "./icons/ArrowUp";
import { imageToBase64 } from "../utils/convertImage";

type GeneratorSidebarProps = {
  handleTextChange: (title: string, desc: string, url: string) => void;
};

const ImageGeneratorSidebar = ({ handleTextChange }: GeneratorSidebarProps) => {
  const [title, setTitle] = useState<string>("Meta Tags Extractor");
  const [description, setDescription] = useState<string>(
    "Extract meta tags from any URL"
  );
  const [url, setUrl] = useState<string>("www.example.com");
  const [base64Img, setBase64Img] = useState<string | null | unknown>(null);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const imageHolder = useRef<HTMLDivElement | null>(null);

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

  const handleFileInput = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files?.length && imageHolder.current) {
      const uploadedImage = URL.createObjectURL(event.target.files[0]);
      imageHolder.current.style.backgroundImage = `url(${uploadedImage})`;
      try {
        // Convert the image file to a Base64 string
        const base64String: string | null | unknown = await imageToBase64(
          event.target.files[0]
        );
        setBase64Img(base64String);
      } catch (error) {
        console.error("Error converting image to Base64:", error);
      }
    }
  };

  const triggerFileUpload = () => {
    fileInput?.current?.click();
  };

  return (
    <div className="w-full bg-neutral-800 p-4 rounded-xl flex flex-col gap-5 md:sticky md:top-8">
      <div
        ref={imageHolder}
        className="w-full relative py-28 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden bg-cover bg-no-repeat bg-center bg-blend-overlay"
      >
        <div className="absolute inset-0 w-full h-full bg-neutral-600/30 grid place-content-center place-items-center gap-2">
          <button
            onClick={triggerFileUpload}
            className="w-12 h-12 group hover:bg-neutral-100/60 rounded-full bg-neutral-500/50 inline-flex items-center justify-center transition-all duration-300"
          >
            <ArrowUp classNames="fill-[#b4ff5c] w-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:fill-neutral-700" />
          </button>
          <span className="lg:text-base text-sm text-neutral-200">
            Add image
          </span>
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .svg"
            className="hidden"
            ref={fileInput}
            onChange={handleFileInput}
          />
        </div>
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

      <button
        type="button"
        className="w-full bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 rounded-lg py-2 px-4 transition-all duration-300"
        onClick={() => handleTextChange(title, description, url)}
      >
        Update image
      </button>
    </div>
  );
};

export default ImageGeneratorSidebar;
