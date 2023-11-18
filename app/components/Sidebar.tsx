"use client";

import { useState } from "react";
import SyntaxHighlight from "./SyntaxHighlight";
import Code from "./icons/Code";

type SidebarProps = {
  title: string;
  description: string;
  image: string;
  ogType: string;
  twitterCardType: string;
  url: string;
};

const Sidebar = ({
  title,
  description,
  image,
  ogType,
  twitterCardType,
  url,
}: SidebarProps) => {
  const [showSnippet, setShowSnippet] = useState<boolean>(false);

  const codeSnippet = () => {
    return (
      <SyntaxHighlight
        description={description ? description : null}
        hideSnippet={() => setShowSnippet(false)}
        image={image ? image : null}
        ogType={ogType ? ogType : null}
        title={title ? title : null}
        twitterCard={twitterCardType ? twitterCardType : null}
        url={url ? url : null}
      />
    );
  };

  return (
    <>
      <div className="w-full bg-neutral-800 p-4 rounded-xl flex flex-col gap-5 md:sticky md:top-8">
        <div
          className="w-full h-52 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
        <div className="w-full">
          <label htmlFor="title" className="text-neutral-300 inline-block mb-2">
            Title
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
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="description"
            className="text-neutral-300 inline-block mb-2"
          >
            Description
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
