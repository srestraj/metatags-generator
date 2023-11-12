"use client";
import { useRouter } from "next/navigation";
import Loader from "./icons/Loader";
import SearchIcon from "./icons/SearchIcon";

const Search = () => {
  const router = useRouter();
  let url: string | null = "";
  let loading: boolean = false;

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loading = true;
    if (url) {
      router.push(`/extract?url=${url}`, {
        scroll: true,
      });
      loading = false;
    }
  };

  const validateUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    url = event.target.value;
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="relative z-10 flex space-x-3 p-3 bg-neutral-800 rounded-lg shadow-lg shadow-neutral-900">
        <div className="flex-[1_0_0%]">
          <input
            type="url"
            defaultValue={url}
            className="py-2.5 px-4 block w-full border-0 bg-transparent text-neutral-200 focus:outline-none"
            placeholder="Enter website URL"
            required
            onChange={validateUrl}
            autoFocus={true}
            autoComplete="off"
          />
        </div>
        <div className="flex-[0_0_auto]">
          <button
            type="submit"
            className="group w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-[#b4ff5c] text-neutral-800 disabled:opacity-50 disabled:pointer-events-none"
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
