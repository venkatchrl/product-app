/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ListItem from "./ListItem";

// import Categories from "./Categories";
// import ListItem from "./ListItem";

const List1 = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div className="">
      <div>
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        {/* <Categories products={products} /> */}
        {products
          .filter((product) => {
            if (search == "") {
              return product;
            } else if (
              product.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => {
            return <ListItem product={product} key={product.id} />;
          })}
      </div>
    </div>
  );
};

export default List1;
