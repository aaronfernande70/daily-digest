import dynamic from "next/dynamic";

const Text = dynamic(() => import("./Text"));

export default Text;