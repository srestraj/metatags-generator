type Props = {
  classNames?: string;
};

const ArrowUp = ({ classNames }: Props) => {
  return (
    <svg
      className={classNames}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M17.71,9.88l-4.3-4.29a2,2,0,0,0-2.82,0L6.29,9.88a1,1,0,0,0,0,1.41,1,1,0,0,0,1.42,0L11,8V19a1,1,0,0,0,2,0V8l3.29,3.29a1,1,0,1,0,1.42-1.41Z" />
    </svg>
  );
};

export default ArrowUp;
