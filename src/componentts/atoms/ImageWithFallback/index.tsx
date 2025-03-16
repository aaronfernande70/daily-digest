import dynamic from "next/dynamic";

const ImageWithFallback = dynamic(() => import("./ImageWithFallback"))

export default ImageWithFallback;
