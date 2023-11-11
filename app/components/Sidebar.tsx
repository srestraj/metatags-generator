type SidebarProps = {
  title: string;
  description: string;
  image: string;
};

const Sidebar = ({ title, description, image }: SidebarProps) => {
  return (
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
    </div>
  );
};

export default Sidebar;
