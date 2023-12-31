"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "./icons/Loader";
import SearchIcon from "./icons/SearchIcon";
import Input from "./inputs/Input";

const Search = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  let url: string | null = "";

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (url) {
      router.push(`/extract?url=${url.replace(/\/+$/, "")}`, {
        scroll: true,
      });
    }
  };

  const validateUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    url = event.target.value;
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="relative z-10 flex space-x-3 p-3 bg-neutral-800 rounded-lg shadow-lg shadow-neutral-900">
        <div className="flex-[1_0_0%]">
          <Input
            autoFocus={true}
            defaultVal={url}
            id="urlInput"
            noBorder={true}
            onChange={validateUrl}
            placeHolder="Enter website URL"
            required={true}
            type="url"
          />
        </div>
        <div className="flex-[0_0_auto]">
          <button
            disabled={loading}
            type="submit"
            className="
              group
              w-[46px]
              h-[46px]
              inline-flex
              justify-center
              items-center
              gap-x-2
              text-sm
              font-semibold
              rounded-lg
              bg-brand
              text-neutral-800
              disabled:opacity-50
              disabled:pointer-events-none
              disabled:cursor-not-allowed
            "
          >
            {loading ? (
              <Loader classNames="w-4 h-4 animate-spin" />
            ) : (
              <SearchIcon classNames="group-hover:-rotate-12 duration-300 transition-all" />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
