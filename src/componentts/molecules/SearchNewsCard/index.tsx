import dynamic from "next/dynamic";

const SearchNewsCard = dynamic(() => import("./SearchNewsCard"));

export default SearchNewsCard;