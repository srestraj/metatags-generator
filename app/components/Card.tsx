type CardProps = {
  data: {
    description: string;
    image: string;
    title: string;
    url: string;
    type: string;
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
                className="w-full h-full object-cover object-center"
              />
            }
          </div>
        )}
        {data.type === "slack" && <p className="url">{data.url}</p>}
        <p className="title">{data.title}</p>
        {data.type === "twitter" ||
          (data.type !== "slack" && data.type !== "pinterest" && (
            <p className="url">{formatUrl(data.url)}</p>
          ))}
        {data.type !== "pinterest" && data.type !== "linkedin" && (
          <p className="description">{data.description}</p>
        )}
        {data.type === "slack" && (
          <div className="image-wrapper relative overflow-hidden">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover object-center"
              />
            }
          </div>
        )}
      </article>
    </>
  );
};

export default Card;
