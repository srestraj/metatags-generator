import SocialSnapshot from "./SocialSnapshot";

const TemplateShowcase = () => {
  const templateList = [
    {
      title: "Default",
      imageUrl:
        "/api/og?title=Logoipsum&desc=Logoipsum%20|%20Free%20placeholder%20logo%20for%20your%20design/mockup&url=logoipsum.com&logo=https://logoipsum.com/favicon.svg&mainImage=https://images.pexels.com/photos/8408534/pexels-photo-8408534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&logoRatio=1:1&type=default",
    },
    {
      title: "Split",
      imageUrl:
        "/api/og?title=Logoipsum&desc=Logoipsum%20|%20Free%20placeholder%20logo%20for%20your%20design/mockup&url=logoipsum.com&logo=https://logoipsum.com/favicon.svg&mainImage=https://images.pexels.com/photos/8408534/pexels-photo-8408534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&logoRatio=1:1&type=split",
    },
    {
      title: "Full image background",
      imageUrl:
        "/api/og?title=Logoipsum&desc=Logoipsum%20|%20Free%20placeholder%20logo%20for%20your%20design/mockup&url=logoipsum.com&logo=https://logoipsum.com/favicon.svg&mainImage=https://images.pexels.com/photos/8408534/pexels-photo-8408534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&logoRatio=1:1&type=fullImageBg",
    },
    {
      title: "GitHub",
      imageUrl:
        "/api/og?title=Logoipsum&desc=Logoipsum%20|%20Free%20placeholder%20logo%20for%20your%20design/mockup&url=logoipsum.com&logo=https://logoipsum.com/favicon.svg&mainImage=https://images.pexels.com/photos/8408534/pexels-photo-8408534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1&logoRatio=1:1&type=github",
    },
  ];
  return (
    <section className="py-24 bg-dark">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-light text-center">
          Choose from 4 different image templates
        </h2>
        <div className="w-full flex flex-col gap-16 py-32">
          {templateList.map((template) => (
            <SocialSnapshot
              key={template.title}
              title={template.title}
              image={template.imageUrl}
              isOg={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
