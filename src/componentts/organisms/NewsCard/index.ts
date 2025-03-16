import dynamic from "next/dynamic";

const NewsCard = dynamic(() => import("./NewsCard"));

export default NewsCard;