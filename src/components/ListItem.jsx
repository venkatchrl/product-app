
const ListItem = ({product}) => {
    return (
        <div>
            <p>{product?.title}</p>
            <img src={product?.image} height={250} width={200}/>
            <p>{product?.price}</p>
            <button>Buy</button>
        </div>
    );
}

export default ListItem;
