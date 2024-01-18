import CodepenIcon from "./icons/socials/Codepen";
import DribbbleIcon from "./icons/socials/Dribbble";
import GithubIcon from "./icons/socials/Github";
import InstagramIcon from "./icons/socials/Instagram";
import LinkedInIcon from "./icons/socials/LinkedIn";
import TwitterIcon from "./icons/socials/Twitter";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 border-t border-neutral-800">
        <h5 className="text-center text-3xl font-bold capitalize text-light">
          get in touch
        </h5>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://instagram.com/srestraj"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon classNames="w-6 h-6 fill-neutral-300 hover:fill-neutral-500 transition" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/srestraj"
              rel="noreferrer"
              target="_blank"
            >
              <TwitterIcon classNames="w-6 h-6 fill-neutral-300 hover:fill-neutral-500 transition" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/srestraj"
              rel="noreferrer"
              target="_blank"
            >
              <GithubIcon classNames="w-6 h-6 fill-neutral-300 hover:fill-neutral-500 transition" />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/srestraj"
              rel="noreferrer"
              target="_blank"
            >
              <CodepenIcon classNames="w-6 h-6 fill-neutral-300 hover:fill-neutral-500 transition" />
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/srestraj"
              rel="noreferrer"
              target="_blank"
            >
              <DribbbleIcon classNames="w-6 h-6 fill-neutral-300 hover:fill-neutral-500 transition" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/srestraj"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon classNames="w-6 h-6 fill-neutral-300 hover:fill-neutral-500 transition" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
