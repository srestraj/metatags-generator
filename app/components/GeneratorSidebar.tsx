"use client";

import { useState } from "react";
import ImageInput from "./inputs/ImageInput";
import TextArea from "./inputs/TextArea";
import Input from "./inputs/Input";

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

const GeneratorSidebar = ({ handleParamsUpdate }: GeneratorSidebarProps) => {
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

  const triggerImageUpload = async (file: File, type: "logo" | "main") => {
    const result = await uploadImage(file);
    type === "logo" ? setLogoUrl(result) : setMainImageUrl(result);
  };

  return (
    <div className="w-full bg-neutral-800 p-4 rounded-xl flex flex-col gap-5 md:sticky md:top-8">
      <ImageInput
        classNames="py-20"
        handleUrlInput={(e: string) => setLogoUrl(e)}
        imgUrl={logoUrl}
        inputId="logoImg"
        isInput={logoUrlInput}
        title="Logo"
        toggleInput={(e: boolean) => setLogoUrlInput(e)}
        triggerUpload={(file: File) => triggerImageUpload(file, "logo")}
      />

      <ImageInput
        classNames="py-28"
        handleUrlInput={(e: string) => setMainImageUrl(e)}
        imgUrl={mainImageUrl}
        inputId="mainImg"
        isInput={mainImgUrlInput}
        title="Main image"
        toggleInput={(e: boolean) => setMainImgUrlInput(e)}
        triggerUpload={(file: File) => triggerImageUpload(file, "main")}
      />

      <div className="w-full">
        <label
          htmlFor="title"
          className="text-neutral-300 w-full flex items-center justify-between mb-2"
        >
          <span>Title</span>
          <span className="text-xs text-neutral-600">{title.length}/90</span>
        </label>
        <TextArea
          rows={3}
          defaultVal={title}
          handleInput={handleTitleChange}
          id="title"
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
        <TextArea
          rows={6}
          defaultVal={description}
          handleInput={handleDescriptionChange}
          id="description"
          maxLength={300}
        />
      </div>

      <div className="w-full">
        <label htmlFor="url" className="text-neutral-300 inline-block mb-2">
          URL
        </label>
        <Input
          defaultVal={url}
          handleInput={handleUrlChange}
          id="url"
          type="text"
        />
      </div>

      <div className="w-full">
        <label
          htmlFor="logoRatio"
          className="text-neutral-300 inline-block mb-2"
        >
          Logo ratio
        </label>
        <Input
          defaultVal={logoRatio}
          handleInput={handleRatioChange}
          id="logoRatio"
          type="text"
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

export default GeneratorSidebar;
