import Card from "./Card";

type SocialCardProps = {
  description: string;
  icon: string;
  image: string;
  siteName: string | null;
  title: string;
  url: string;
};
const SocialCard = ({
  description,
  icon,
  image,
  siteName,
  title,
  url,
}: SocialCardProps) => {
  const socials = ["facebook", "twitter", "linkedin", "pinterest", "slack"];
  return (
    <div className="flex flex-col gap-5">
      {socials.map((social: string) => (
        <Card
          key={social}
          data={{
            description,
            icon,
            image,
            siteName,
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
