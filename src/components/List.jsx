/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import ListItem from "./ListItem";

const List = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    setProducts(data);
    setFilter(data);
    console.log(filter);
  };

  const filterProduct = (cat) => {
    const updatedList = products.filter((filtercategory) => {
      filtercategory.category === cat;
    });
    setFilter(updatedList);
  };
  console.log(filter);

  const ShowProducts = () => {
    return (
      <div>
        <button
          onClick={() => {
            setFilter(products);
            console.log(setFilter);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            filterProduct("men's clothing");
          }}
        >
          Men&apos;s Clothing
        </button>
        <button
          onClick={() => {
            filterProduct("women's Clothing");
          }}
        >
          Women&apos;s Clothing
        </button>
        <button
          onClick={() => {
            filterProduct("jewelery");
          }}
        >
          Jewellery
        </button>
        <button
          onClick={() => {
            filterProduct("electronics");
          }}
        >
          Electronics
        </button>
        {/* <div className=""> 
          {<Filter setFilter={products} products={products} /> }
         </div> */}

        <div>
          {filter.map((product) => {
            return (
              <>
                <div>
                  <p>{product?.title}</p>
                  <img
                    src={product?.image}
                    alt={product?.category}
                    height={250}
                    width={200}
                  />
                  <p>{product?.price}</p>
                  <button
                    className="text-white bg-gray-800 hover:bg-gray-900 
            focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
             dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Buy Now
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div>
        <ShowProducts />
      </div>
      <div></div>
    </div>
  );
};

export default List;
