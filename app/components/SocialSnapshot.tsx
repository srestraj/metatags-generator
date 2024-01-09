import Image from "next/image";

type SnapshotProps = {
  image: string;
  isOg?: boolean;
  title: string;
};

const SocialSnapshot = ({ image, isOg, title }: SnapshotProps) => {
  return (
    <div className="w-full grid md:grid-cols-3 md:gap-8 gap-4">
      <div className="md:col-span-1 place-self-start md:sticky top-16">
        <h3 className="mb-4 md:text-3xl font-normal tracking-normal text-xl text-gray-200">
          {title}
        </h3>
      </div>
      <div className="md:col-span-2">
        <div className="w-full rounded-xl border-2 border-neutral-700 overflow-hidden">
          {isOg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt="screenshot" className="w-full h-full" />
          ) : (
            <Image src={image} width={1200} height={800} alt="screenshot" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialSnapshot;
