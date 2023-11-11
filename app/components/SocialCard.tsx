import Card from "./Card";

type SocialCardProps = {
  description: string;
  image: string;
  title: string;
  url: string;
};
const SocialCard = ({ description, image, title, url }: SocialCardProps) => {
  const socials = [
    // "facebook",
    // "twitter",
    "linkedin",
    "pinterest",
    "slack",
  ];
  return (
    <div className="flex flex-col gap-5">
      {socials.map((social: string) => (
        <Card
          key={social}
          data={{
            description,
            image,
            title,
            url,
            type: social,
          }}
        />
      ))}
    </div>
  );
};

export default SocialCard;
