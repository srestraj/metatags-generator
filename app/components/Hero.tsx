import Search from "./Search";
import Stroke from "./icons/Stroke";

const Hero = () => {
  return (
    <section className="text-white">
      <div className="mx-auto max-w-screen-xl md:pt-32 md:pb-32 pt-32 pb-20 px-6 lg:px-8 lg:flex lg:items-center">
        <div className="mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-10 text-light mb-8">
            Extract{" "}
            <div className="inline-block relative">
              meta tags
              <Stroke classNames="absolute fill-brand bottom-0 z-[-1]" />
            </div>{" "}
            <br /> from any site
          </h1>

          <p className="text-lg font-normal text-light max-w-3xl">
            Enter your website URL in the input below and extract meta tags or
            click <strong>Generate og:image</strong> to generate og:images that
            you can use on your website.
          </p>

          <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
