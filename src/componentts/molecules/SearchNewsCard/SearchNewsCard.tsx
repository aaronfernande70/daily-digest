import ImageWithFallback from "@/componentts/atoms/ImageWithFallback";
import { placeholderImage } from "@/utils/constants";
import { ArticleProps } from "@/utils/index.types";
import Link from "next/link";

const SearchNewsCard = ({ news }:{news:ArticleProps}) => {
    const title = news?.title || news.headline?.main;
    const url = news?.url || news?.web_url;
   
    const urlToImage =  news?.urlToImage || (news?.multimedia?.[0]?.url.includes('http') ? news?.multimedia?.[0]?.url : news?.image_url);
    return (
    <Link  target="_blank" href={url ?? "/"}>
      <li>
        <div className="flex items-center p-2 border-b m-2 border-gray-300 gap-4">
          <ImageWithFallback
            height={100}
            width={100}
            className="max-h-24
                          w-24 tex"
            src={urlToImage ?? placeholderImage}
            fallbackSrc={placeholderImage}
            alt={title ?? "Image"}
          />
          <h5 className="line-clamp-2">{title}</h5>
        </div>
      </li>
    </Link>
  );
};

export default SearchNewsCard;
