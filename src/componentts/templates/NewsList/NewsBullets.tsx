import { placeholderImage } from "@/utils/constants";
import { ArticleProps } from "@/utils/index.types";
import Image from "next/image";
import Link from "next/link";

const NewsBullets = ({ news = [] }) => {
  return (
    <div className="news-bullets">
      {news?.map((article: ArticleProps) => {
        const title = article?.title;
        const url = article?.url;
        const description = article?.description || article?.abstract;
        const urlToImage =
          article?.urlToImage ||
          article?.media?.[0]?.["media-metadata"]?.[2]?.url ||
          article?.image_url;
        return (
          <Link target="_blank" href={url ?? "/"} key={title}>
            <div className="news-bullet flex h-24 gap-3 overflow-clip py-2">
              <span className="min-w-[150px]">
                <Image
                  width={150}
                  height={150}
                  src={urlToImage ?? placeholderImage}
                  alt={title?? "Image"}
                  placeholder="blur"
                  blurDataURL="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbeautyrepublicfdl.com%2Fhello-world%2Fplaceholder-image%2F&psig=AOvVaw2aviCDeu5hQA9dzUZc-im-&ust=1741961306181000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDhttudh4wDFQAAAAAdAAAAABAE"
                />
              </span>
              <span>
                <h3 title={title} className="line-clamp-1">
                  {title}
                </h3>
                <p title={description} className="line-clamp-2">
                  {description}
                </p>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NewsBullets;
