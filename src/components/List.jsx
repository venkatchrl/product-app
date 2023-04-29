import { useEffect, useState } from "react";
import ListItem from "./ListItem";

const List = () => {
    const [products, setProducts]=useState([]);

    useEffect(() =>{
        fetchProducts();
    },[])

    const fetchProducts = async () => {
        const data = await fetch (`https://fakestoreapi.com/products`);
        const list = await data.json();
        setProducts(list);
        console.log(list);
    }

    return (
        <div>
            {(products.map((product) => {
                return <ListItem product={product} key={product?.id}/> ;
            }))}
        </div>
    );
}

export default List;
