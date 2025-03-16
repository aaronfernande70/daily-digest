import { placeholderImage } from "@/utils/constants";
import { ArticleProps } from "@/utils/index.types";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ news }: { news: ArticleProps }) => {
  const title = news?.title;
  const description = news?.description || news?.abstract;
  const urlToImage =
    news?.urlToImage ||
    news?.media?.[0]?.["media-metadata"]?.[2]?.url ||
    news?.image_url;
  const url = news?.url || news?.link;

  return (
    <Link href={url ?? "/"} target={url ?"_blank":"_self" }>
      <div className="news-card border-b-1 boder py-2 border-gray-400 my-2 flex gap-2 flex-col h-96">
        <Image
          width={500}
          height={400}
          className="w-[500px] h-[240px]"
          src={urlToImage ?? placeholderImage}
          alt={news?.title ?? "Image"}
          placeholder="blur"
          blurDataURL="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbeautyrepublicfdl.com%2Fhello-world%2Fplaceholder-image%2F&psig=AOvVaw2aviCDeu5hQA9dzUZc-im-&ust=1741961306181000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDhttudh4wDFQAAAAAdAAAAABAE"
        />
        <h3 title={title} className="line-clamp-2">
          {title}
        </h3>
        <p title={description} className="line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
