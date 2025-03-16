import dynamic from "next/dynamic";

const SearchContainer = dynamic(() => import("./SearchContainer"));

export default SearchContainer;