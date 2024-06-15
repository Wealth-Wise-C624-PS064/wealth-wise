import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function Categories({ categories }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    setCurrentCategory(searchParams.get("category") ?? "");
  }, [searchParams]);

  const handleChangeCategorySearch = (categoryName) => {
    if (categoryName === currentCategory) {
      setSearchParams({ category: "" });
    } else {
      setSearchParams({ category: categoryName });
    }
  };

  return (
    <div className="flex flex-row flex-wrap gap-2">
      <Button
        className="rounded-full bg-primary-blue hover:bg-primary-blue/80 "
        onClick={() => handleChangeCategorySearch("")}
      >
        Semua
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          className={`rounded-full bg-primary-blue hover:bg-primary-blue/80 ${
            category.name === currentCategory && "bg-primary-blue/60"
          }`}
          onClick={() => handleChangeCategorySearch(category.name)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array,
};
