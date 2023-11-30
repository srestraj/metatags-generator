import Link from "next/link";
import ArrowLeft from "./icons/ArrowLeft";

type PageHeaderProps = {
  url?: string;
  title?: string;
};

const PageHeader = ({ url, title }: PageHeaderProps) => {
  return (
    <section className="py-24 relative md:max-w-screen-xl mx-auto px-4 sm:px-6 text-center">
      <Link href="/" className="group absolute inline-block top-8 left-2">
        <ArrowLeft classNames="group-hover:-translate-x-2 transition-all duration-200 w-6 fill-neutral-100" />
      </Link>
      {url && <span className="text-lg text-neutral-200">Meta tags from</span>}
      <h3 className="md:text-2xl text-xl font-bold text-brand">
        {title ? (
          title
        ) : (
          <a
            href={`${url}?utm_source=${process.env.SITE_NAME}`}
            target="_blank"
            rel="noreferrer"
            className="break-words hover:underline underline-offset-4"
          >
            {url}
          </a>
        )}
      </h3>
    </section>
  );
};

export default PageHeader;
