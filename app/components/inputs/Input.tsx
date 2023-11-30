type InputProps = {
  autoFocus?: boolean;
  defaultVal: string;
  handleInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  noBorder?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  required?: boolean;
  type: string;
};

const Input = ({
  autoFocus,
  defaultVal,
  handleInput,
  id,
  noBorder,
  onChange,
  placeHolder,
  required,
  type,
}: InputProps) => {
  return (
    <input
      type={type}
      id={id}
      defaultValue={defaultVal}
      onInput={handleInput}
      onChange={onChange}
      className={`
        w-full
        h-full
        bg-transparent
        text-neutral-200
        focus:outline-none
        p-2
        rounded-lg
        transition-all
        duration-300
        focus:bg-transparent
        active:bg-transparent
        ${noBorder ? "" : "border border-neutral-600 focus:border-brand"}
      `}
      autoFocus={autoFocus}
      placeholder={placeHolder}
      autoComplete="off"
      required={required}
    />
  );
};

export default Input;
