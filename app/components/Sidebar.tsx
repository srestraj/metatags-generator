"use client";

import { useEffect, useState } from "react";
import SyntaxHighlight from "./SyntaxHighlight";
import Code from "./icons/Code";
import ImageInput from "./inputs/ImageInput";
import TextArea from "./inputs/TextArea";

type SidebarProps = {
  description: string;
  image: string;
  ogType: string;
  title: string;
  twitterCardType: string;
  url: string;
};

const CLOUD_NAME: string | undefined = process.env.NEXT_PUBLIC_CLOUD_NAME;
const UPLOAD_PRESET: string | undefined = process.env.NEXT_PUBLIC_UPLOAD_PRESET;

const Sidebar = ({
  description,
  image,
  ogType,
  title,
  twitterCardType,
  url,
}: SidebarProps) => {
  const [isInput, setIsInput] = useState<boolean>(false);
  const [showSnippet, setShowSnippet] = useState<boolean>(false);
  const [updatedDescription, setUpdatedDescription] =
    useState<string>(description);
  const [updatedImage, setUpdatedImage] = useState<string>(image);
  const [updatedTitle, setUpdatedTitle] = useState<string>(title);

  const codeSnippet = () => {
    return (
      <SyntaxHighlight
        description={updatedDescription ? updatedDescription : null}
        hideSnippet={() => setShowSnippet(false)}
        image={updatedImage ? updatedImage : null}
        ogType={ogType ? ogType : null}
        title={updatedTitle ? updatedTitle : null}
        twitterCard={twitterCardType ? twitterCardType : null}
        url={url ? url : null}
      />
    );
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

  const triggerImageUpload = async (file: File) => {
    const result = await uploadImage(file);
    setUpdatedImage(result);
  };

  return (
    <>
      <div className="w-full bg-neutral-800 p-4 rounded-xl flex flex-col gap-5 md:sticky md:top-8">
        <ImageInput
          classNames="py-24"
          handleUrlInput={(e: string) => setUpdatedImage(e)}
          imgUrl={updatedImage}
          inputId="logoImg"
          isInput={isInput}
          toggleInput={(e: boolean) => setIsInput(e)}
          triggerUpload={(file: File) => triggerImageUpload(file)}
        />
        <div className="w-full">
          <label htmlFor="title" className="text-neutral-300 inline-block mb-2">
            Title
          </label>
          <TextArea
            rows={3}
            defaultVal={title}
            handleInput={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setUpdatedTitle(event.target.value)
            }
            id="title"
            maxLength={90}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="description"
            className="text-neutral-300 inline-block mb-2"
          >
            Description
          </label>
          <TextArea
            rows={6}
            defaultVal={description}
            handleInput={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setUpdatedDescription(event.target.value)
            }
            id="description"
            maxLength={300}
          />
        </div>

        <button
          type="button"
          className="w-full inline-flex items-center justify-center gap-2 bg-neutral-100 text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100 rounded-lg py-2 px-4 transition-all duration-300"
          onClick={() => setShowSnippet(true)}
        >
          <Code classNames="w-4 fill-current" />
          <span>Get code</span>
        </button>
      </div>
      {showSnippet && codeSnippet()}
    </>
  );
};

export default Sidebar;
