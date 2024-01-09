import AppScreenshot from "./AppScreenshot";
import TemplateShowcase from "./TemplateShowcase";
import Stroke from "./icons/Stroke";

const OgHero = () => {
  return (
    <section className="text-white bg-neutral-900">
      <div className="mx-auto max-w-screen-xl md:pt-32 md:pb-32 pt-32 pb-20 px-6 lg:px-8 lg:flex lg:items-center">
        <div className="mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-10 text-light mb-8">
            Generate{" "}
            <div className="inline-block relative">
              <span className="relative z-[1]">og:image</span>
              <Stroke classNames="fill-brand z-[-1]" />
            </div>
            <br /> for your site
          </h2>

          <p className="text-lg font-normal text-light max-w-xl">
            Use our built-in <strong>og:image generator</strong> to generate
            og:images for your own site.
          </p>
        </div>
      </div>
      <AppScreenshot imageUrl="/img/og-generator-snapshot.png" />
      <TemplateShowcase />
    </section>
  );
};

export default OgHero;
