type CardProps = {
  data: {
    description: string;
    icon: string;
    image: string;
    siteName: string | null;
    title: string;
    type: string;
    url: string;
  };
};

const Card = ({ data }: CardProps) => {
  const formatUrl = (url: string) => {
    const formattedUrl = url?.match(
      /^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im
    );

    if (formattedUrl && formattedUrl.length) {
      return formattedUrl[1];
    }
  };

  return (
    <>
      <h6 className="text-neutral-200 font-medium capitalize">{data.type}</h6>
      <article className={`${data.type} flex flex-col cursor-pointer`}>
        {data.type !== "slack" && data.type !== "google" && (
          <div className="image-wrapper relative overflow-hidden">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover object-center social-image"
              />
            }
          </div>
        )}
        {data.type === "slack" && (
          <div className="inline-flex items-center gap-2">
            {data.icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="w-4"
                src={
                  data.icon.includes("https://" || "http://" || data.url)
                    ? data.icon
                    : `https://${formatUrl(data.url)}${data.icon}`
                }
                alt={data.siteName || data.url}
              />
            )}
            <p className="url">{data.siteName ? data.siteName : data.url}</p>
          </div>
        )}
        {data.type === "facebook" && (
          <p className="url">{formatUrl(data.url)}</p>
        )}
        {data.type === "twitter" && (
          <span className="url">{formatUrl(data.url)}</span>
        )}
        {data.type !== "twitter" && (
          <p className="title social-title">{data.title}</p>
        )}
        {data.type === "twitter" ||
          (data.type !== "slack" &&
            data.type !== "pinterest" &&
            data.type !== "facebook" && (
              <p className="url">{formatUrl(data.url)}</p>
            ))}
        {data.type !== "pinterest" &&
          data.type !== "linkedin" &&
          data.type !== "facebook" &&
          data.type !== "twitter" && (
            <p className="description social-description">{data.description}</p>
          )}
        {data.type === "slack" && (
          <div className="image-wrapper relative overflow-hidden">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover object-center social-image"
              />
            }
          </div>
        )}
      </article>
    </>
  );
};

export default Card;
