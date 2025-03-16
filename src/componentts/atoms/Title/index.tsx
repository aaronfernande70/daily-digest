import dynamic from "next/dynamic";


const Title = dynamic(() => import("./Title"));

export default Title;