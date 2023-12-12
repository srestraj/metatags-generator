"use client";

import { useRef } from "react";
import ArrowUp from "../icons/ArrowUp";
import Input from "./Input";

type ImageInputProps = {
  classNames: string;
  handleUrlInput: (url: string) => void;
  imgUrl: string;
  inputId: string;
  isInput: boolean;
  title: string;
  toggleInput: (val: boolean) => void;
  triggerUpload: (file: File) => void;
};

const ImageInput = ({
  classNames,
  handleUrlInput,
  imgUrl,
  inputId,
  isInput,
  title,
  toggleInput,
  triggerUpload,
}: ImageInputProps) => {
  const imageHolder = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileInput = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files?.length && imageHolder.current) {
      await triggerUpload(event.target.files[0]);
    }
  };

  const handleImgUrlInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleUrlInput(event.target.value);
  };

  const triggerImageUpload = () => {
    inputRef?.current?.click();
  };

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="text-neutral-300 w-full flex items-center justify-between mb-2"
      >
        <span>{title}</span>
        {isInput && (
          <button
            onClick={() => toggleInput(false)}
            type="button"
            className="text-sm text-neutral-400 hover:text-neutral-300 hover:underline"
          >
            Add image
          </button>
        )}
      </label>
      {isInput ? (
        <Input
          defaultVal={imgUrl}
          handleInput={handleImgUrlInput}
          id={inputId}
          type="url"
        />
      ) : (
        <div
          ref={imageHolder}
          className={`w-full relative ${classNames} bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          style={{ backgroundImage: imgUrl ? `url(${imgUrl})` : "" }}
        >
          <div className="absolute inset-0 w-full h-full bg-neutral-900/50 grid place-content-center place-items-center gap-2">
            <button
              onClick={triggerImageUpload}
              className="w-12 h-12 group hover:bg-neutral-100/60 rounded-full bg-neutral-300/50 inline-flex items-center justify-center transition-all duration-300"
            >
              <ArrowUp classNames="fill-brand w-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:fill-neutral-700" />
            </button>
            <span className="lg:text-base text-sm text-neutral-200">
              Add image or{" "}
              <button
                onClick={() => toggleInput(true)}
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
              ref={inputRef}
              onChange={handleFileInput}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageInput;
