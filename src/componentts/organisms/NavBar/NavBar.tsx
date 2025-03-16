import Title from "@/componentts/atoms/Title";
import CategorySlider from "@/componentts/molecules/CategorySlider";
import { HeaderSectionLeft } from "@/componentts/molecules/HeaderSectionLeft";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Link from "next/link";
import SearchContainer from "../SearchContainer";
import HeaderSectionRight from "@/componentts/molecules/HeaderSectionRight";

const NavBar = () => {
  return (
    <nav className="p-4 mx-4 flex flex-col border-b-1 border-gray-600">
      <div className="flex justify-between">
        <HeaderSectionLeft />
        <span className="w-[34%] flex justify-center text-center">
          <Title title="daity Gist" type="h1">
            <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={250}
              height={250}
              />
          </Link>

          </Title>
        </span>
        <HeaderSectionRight />
      </div>
      <CategorySlider/>
      <SearchContainer/>
    </nav>
  );
};

export default NavBar;
