import dynamic from "next/dynamic";

const NewsList = dynamic(() => import("./NewsList"));

export default NewsList;