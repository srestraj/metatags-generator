type TextAreaProps = {
  rows: number;
  defaultVal: string;
  handleInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  maxLength: number;
};

const TextArea = ({
  rows,
  defaultVal,
  handleInput,
  id,
  maxLength,
}: TextAreaProps) => {
  return (
    <textarea
      id={id}
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
        duration-75
        custom-scrollbar
      "
      cols={12}
      rows={rows}
      defaultValue={defaultVal}
      onInput={handleInput}
      maxLength={maxLength}
    />
  );
};

export default TextArea;
