/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

const Filter = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/categories`);
    const list = await data.json();
    // console.log(list);
    setCategories(list);
  };

  //   const filterProduct = (cat) => {
  //     const updatedList = products.filter((filtercategory) => {
  //       filtercategory.category === cat;
  //     });
  //
  //   };

  return (
    <div>
      {/* <div>
        <button
          onClick={() => {
          }}
        >
          All
        </button>
      </div>
      {categories.map((category) => {
        return (
          <button
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-slate-400 border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-black dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            key={category}
            onClick={filterProduct({ category })}
          >
            {category}
          </button>
        );
      })} */}
    </div>
  );
};

export default Filter;
