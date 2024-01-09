import SocialSnapshot from "./SocialSnapshot";

const Snapshots = () => {
  const socialList = [
    {
      title: "Facebook",
      imageUrl: "/img/facebook-snapshot.png",
    },
    {
      title: "Twitter",
      imageUrl: "/img/twitter-snapshot.png",
    },
    {
      title: "LinkedIn",
      imageUrl: "/img/linkedin-snapshot.png",
    },
    {
      title: "Pinterest",
      imageUrl: "/img/pinterest-snapshot.png",
    },
    {
      title: "Slack",
      imageUrl: "/img/slack-snapshot.png",
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
              image={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Snapshots;
