/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ListItem from "./ListItem";

function List() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filteredProduct, setfilteredProduct] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setfilteredProduct(data);
  };

  const fetchCategory = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    setCategory(data);
  };

  function fetchFilter(e) {
    const filterData = e.target.innerHTML;
    setfilteredProduct(products);
    const filteredArray = products.filter(
      (filteredProduct) => filteredProduct.category == filterData
    );

    if (filterData == "All") {
      setfilteredProduct(products);
    } else {
      setfilteredProduct(filteredArray);
    }
  }

  useEffect(() => {
    fetchData();
    fetchCategory();
  }, []);

  return (
    <div>
      <div className="eachCategory" onClick={fetchFilter}>
        <button>All</button>
        {category.map((eachCategory) => {
          <button>{eachCategory}</button>;
        })}
      </div>

      {filteredProduct.length > 0 && (
        <div>
          {filteredProduct.map((filteredProduct) => {
            <div className="eachProduct">
              <p key={filteredProduct.id}>{filteredProduct.title}</p>
              <img src={filteredProduct.image} alt="" />
              <p>{filteredProduct.price}</p>
            </div>;
          })}
        </div>
      )}
    </div>
  );
}

export default List;
