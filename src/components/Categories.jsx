/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const Categories = ({ products }) => {
  const [categories, setCategories] = useState([]);
  // const [filter, setFilter] = useState(products);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/categories`
    );
    const data = await response.json();
    console.log(data);
    setCategories(data);
  };

  // function filterProduct(e) {
  //   setFilter(products);
  //   const filteredArray = products.filter(
  //     (filteredProduct) => filteredProduct.category == filterData
  //   );

  //   if (filterData == "All") {
  //     setFilter(products);
  //   } else {
  //     setFilter(filteredArray);
  //   }
  // }

  return (
    <div>
      {categories.map((category) => {
        return (
          <button
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-slate-400 border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-black dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
            key={category}
            // onClick={filterProduct}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
