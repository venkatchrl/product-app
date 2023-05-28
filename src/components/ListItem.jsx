/* eslint-disable react/prop-types */

const ListItem = ({ product }) => {
  return (
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
  );
};

export default ListItem;
