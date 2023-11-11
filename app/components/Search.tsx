"use client";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  let url: string | null = "";

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (url) {
      router.push(`/extract?url=${url}`, {
        scroll: true,
      });
    } else {
      console.log("url reuired!");
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
            <svg
              className="group-hover:-rotate-12 duration-300 transition-all"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
