import SocialSnapshot from "./SocialSnapshot";

const sampleMetatagJson = {
  description:
    "Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from scrambled Latin passage to ubiqitous dummy text.",
  icon: "https://loremipsum.io/assets/images/favicon.png",
  image:
    "https://loremipsum.io/assets/images/lorem-ipsum-generator-custom-placeholder-text.jpg",
  siteName: null,
  title: "Lorem Ipsum – Generator, Origins and Meaning",
  url: "https://loremipsum.io",
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

          <p className="mx-auto mt-4 max-w-lg text-gray-200">
            Extract meta tags and preview how the URL will look when shared to
            some top social media platforms
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
