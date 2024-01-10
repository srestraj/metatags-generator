import Card from "./Card";

type SnapshotProps = {
  image?: string;
  isOg?: boolean;
  title: string;
  cardDetails?: {
    description: string;
    icon: string;
    image: string;
    siteName: string | null;
    title: string;
    type: string;
    url: string;
  };
};

const SocialSnapshot = ({ image, isOg, title, cardDetails }: SnapshotProps) => {
  return (
    <div className="w-full grid md:grid-cols-3 md:gap-8 gap-4">
      <div className="md:col-span-1 place-self-start md:sticky top-16">
        <h3 className="mb-4 md:text-3xl font-normal tracking-normal text-xl text-gray-200">
          {title}
        </h3>
      </div>
      <div className="md:col-span-2">
        {isOg && image && (
          <div className="w-full rounded-xl border-2 border-neutral-700 overflow-hidden">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt="screenshot" className="w-full h-full" />
            }
          </div>
        )}
        {cardDetails && <Card data={cardDetails} />}
      </div>
    </div>
  );
};

export default SocialSnapshot;
