import dynamic from "next/dynamic";
import './index.css';

const CategorySlider = dynamic(() => import("./CategorySlider"));

export default CategorySlider;