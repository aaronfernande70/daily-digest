"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CategoryProps } from "./index.types";
import { usePathname } from "next/navigation";

const CategoryTile = ({ category }: { category: CategoryProps }) => {
  const [activeVal, setActiveVal] = useState(false);
  const pathname = usePathname()
  useEffect(() => {
    setActiveVal(
      pathname
        ? pathname.includes(category.val)
          ? true
          : false
        : category.val === "NewsAPI"
        ? true
        : false
    );
  }, [category.val, pathname]);

  return (
    <Link
      className={`flex underline-offset-3 ${activeVal ? "underline" : ""}`}
      href={`/source/${category.val}`}
      prefetch
      scroll={true}
    >
      <span className="flex justify-center items-center">{category.name}</span>
    </Link>
  );
};

export default CategoryTile;
