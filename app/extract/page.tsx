import { redirect } from "next/navigation";
import Sidebar from "../components/Sidebar";
import Toast from "../components/Toast";
import PageHeader from "../components/PageHeader";
import SocialCard from "../components/SocialCard";

type MetatagProps = {
  name: string;
  content: string;
};

type MetaTag = {
  title: string | undefined | null;
  description: string | undefined | null;
  ogTitle: string | undefined | null;
  ogDescription: string | undefined | null;
  ogImage: string | undefined | null;
  twitterTitle: string | undefined | null;
  twitterDescription: string | undefined | null;
  twitterImage: string | undefined | null;
  siteIcon: string | undefined | null;
  ogSiteName: string | undefined | null;
  ogType: string | undefined | null;
  twitterCardType: string | undefined | null;
};

const extractMetatags = async (url: string) => {
  const baseUrl = process.env.BASE_URL;
  const response = await fetch(`${baseUrl}/api/extract?url=${url}`);
  const data = response.json();
  return data;
};

const Extract = async ({ searchParams }: { searchParams: { url: string } }) => {
  let error = false;
  let errorMessage = "";
  if (searchParams.url == null || !searchParams.url.length) {
    return redirect("/");
  }
  const response: MetatagProps[] | { error: { message: string } } =
    await extractMetatags(searchParams.url);

  if ("error" in response) {
    error = true;
    errorMessage = response.error.message;
  }

  const extractMetadata = (type: string) => {
    if ("error" in response) {
      return;
    }
    const tag: MetatagProps | undefined = response?.find(
      (element: MetatagProps) => element.name === type
    );
    return tag?.content ? tag?.content : "";
  };

  const metadata: MetaTag = {
    title: extractMetadata("title"),
    description: extractMetadata("description"),
    ogTitle: extractMetadata("og:title"),
    ogDescription: extractMetadata("og:description"),
    ogImage: extractMetadata("og:image"),
    twitterTitle: extractMetadata("twitter:title"),
    twitterDescription: extractMetadata("twitter:description"),
    twitterImage: extractMetadata("twitter:image"),
    siteIcon: extractMetadata("icon"),
    ogSiteName: extractMetadata("og:site_name"),
    ogType: extractMetadata("og:type"),
    twitterCardType: extractMetadata("twitter:card"),
  };

  return (
    <>
      <PageHeader url={searchParams.url} />
      <section className="w-full md:max-w-screen-xl mx-auto sm:px-6 px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start lg:gap-8 md:gap-4 gap-4">
          <Sidebar
            title={metadata.title ? metadata.title : ""}
            description={
              metadata.description
                ? metadata.description
                : metadata.ogDescription
                ? metadata.ogDescription
                : metadata.twitterDescription
                ? metadata.twitterDescription
                : ""
            }
            image={
              metadata.ogImage
                ? metadata.ogImage
                : metadata.twitterImage
                ? metadata.twitterImage
                : ""
            }
            ogType={metadata.ogType ? metadata.ogType : ""}
            twitterCardType={
              metadata.twitterCardType ? metadata.twitterCardType : ""
            }
            url={searchParams.url}
          />
          <div className="rounded-xl w-full py-4 md:px-6 px-4 bg-neutral-800 md:col-span-2">
            <SocialCard
              description={
                metadata.description
                  ? metadata.description
                  : metadata.ogDescription
                  ? metadata.ogDescription
                  : metadata.twitterDescription
                  ? metadata.twitterDescription
                  : ""
              }
              image={
                metadata.ogImage
                  ? metadata.ogImage
                  : metadata.twitterImage
                  ? metadata.twitterImage
                  : ""
              }
              title={metadata.title ? metadata.title : ""}
              url={searchParams.url}
              icon={metadata.siteIcon ? metadata.siteIcon : ""}
              siteName={metadata.ogSiteName ? metadata.ogSiteName : null}
            />
          </div>
        </div>
      </section>
      {error && <Toast duration={2500} message={errorMessage} type="error" />}
    </>
  );
};

export default Extract;
