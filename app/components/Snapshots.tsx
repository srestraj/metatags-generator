import Stroke from "./icons/Stroke";
import SocialSnapshot from "./SocialSnapshot";

const sampleMetatagJson = {
  description: "Logoipsum | Free placeholder logo for your design/mockup",
  icon: "https://logoipsum.com/favicon.svg",
  image: "https://logoipsum.com/logoipsum.png",
  siteName: null,
  title: "Logoipsum | Free placeholder logo for your design/mockup",
  url: "https://logoipsum.com",
};

const Snapshots = () => {
  const socialList = [
    {
      title: "Facebook",
      type: "facebook",
    },
    {
      title: "Twitter",
      type: "twitter",
    },
    {
      title: "LinkedIn",
      type: "linkedin",
    },
    {
      title: "Pinterest",
      type: "pinterest",
    },
    {
      title: "Slack",
      type: "slack",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-light">
            Snapshots
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-200">
            Extract meta tags and preview how the URL will look when shared to
            some top social media platforms. See an example of{" "}
            <a
              href={`https://logoipsum.com?utm_source=${process.env.SITE_NAME}`}
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold relative"
            >
              Logoipsum
              <Stroke classNames="absolute fill-brand z-[-1] w-full inset-x-0" />
            </a>{" "}
            below.
          </p>
        </div>
        <div className="w-full flex flex-col gap-16 py-32">
          {socialList.map((item) => (
            <SocialSnapshot
              key={item.title}
              title={item.title}
              cardDetails={{
                description: sampleMetatagJson.description,
                icon: sampleMetatagJson.icon,
                image: sampleMetatagJson.image,
                siteName: null,
                title: sampleMetatagJson.title,
                type: item.type,
                url: sampleMetatagJson.url,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Snapshots;
