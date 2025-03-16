
import NewsCard from "@/componentts/organisms/NewsCard";
import { getHeadlines, getNewsData, getNYTimesNews } from "./helpers";
import NewsSwiper from "./NewsSwiper";
import NewsBullets from "./NewsBullets";
import { ArticleProps } from "@/utils/index.types";

const NewsList = async ({ val }: { val?: string }) => {
  let news = [];

  switch (val) {
    case "NYT":
      news = await getNYTimesNews();
      break;
    case "TND":
      news = await getNewsData();
      break;
    default:
      news = await getHeadlines();
  }

  return (
    <div className="mx-2 p-4">
      <h1 className="sr-only">NewsList</h1>
      <div className="md:flex gap-3">
        <div className="md:w-3/5">
          <NewsSwiper news={news?.slice(0, 4)} />
        </div>
        <NewsBullets news={news?.slice(4, 10)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news?.length > 0 &&
          news?.slice(10)?.map((article: ArticleProps) => (
            <div key={article?.title} className="news-card">
              <NewsCard news={article} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsList;
