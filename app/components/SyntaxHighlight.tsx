"use client";

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useDetectClickOutside } from "react-detect-click-outside";
import { generateTags } from "../utils/generateMetatag";
import Clipboard from "./icons/Clipboard";
import ClipboardCheck from "./icons/ClipboardCheck";

type SyntaxProps = {
  description: string | null;
  hideSnippet: () => void;
  image: string | null;
  ogType: string | null;
  title: string | null;
  twitterCard: string | null;
  url: string | null;
};

const SyntaxHighlight = ({
  description,
  hideSnippet,
  image,
  ogType,
  title,
  twitterCard,
  url,
}: SyntaxProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const ref = useDetectClickOutside({
    onTriggered: () => hideSnippet(),
  });

  const copyCode = () => {
    navigator.clipboard
      .writeText(
        generateTags(description, image, ogType, title, twitterCard, url)
      )
      .then(() => setCopied(true));
  };

  return (
    <div className="md:px-0 px-4 w-full h-full mx-auto fixed inset-0 z-10 bg-neutral-900/40 backdrop-blur-xl">
      <div
        ref={ref}
        className="w-full rounded-lg overflow-hidden md:max-w-xl mx-auto mt-20"
      >
        <div className="w-full bg-neutral-900 py-2.5 px-4 text-neutral-200 text-sm flex items-center justify-between">
          <span>Suggested Meta Tags</span>
          <button
            onClick={copyCode}
            type="button"
            className={`inline-flex items-center justify-center gap-2 rounded ${
              copied ? "bg-neutral-200 text-neutral-800" : "bg-neutral-800"
            } hover:bg-neutral-200 hover:text-neutral-800 duration-300 transition-all py-1 px-3`}
          >
            {!copied ? (
              <>
                <Clipboard classNames="w-4 fill-current" />
                <span>Copy code</span>
              </>
            ) : (
              <>
                <ClipboardCheck classNames="w-4 fill-current" />
                <span>Code copied</span>
              </>
            )}
          </button>
        </div>
        <SyntaxHighlighter
          language="html"
          style={atomOneDark}
          customStyle={{
            padding: 15,
            fontSize: 14,
          }}
          className="custom-scrollbar"
        >
          {generateTags(description, image, ogType, title, twitterCard, url)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default SyntaxHighlight;
