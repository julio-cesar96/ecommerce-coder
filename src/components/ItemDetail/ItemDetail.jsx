const InputCount = (props) => {
    /*...*/
}

const ButtonCount = (props) => {
    /*...*/
}

const ItemDetail = ({ item, inputType = "input"}) => {
    const Count = inputType === "input" ? InputCount : ButtonCount;
    

    return (
        <>
            <h1> Adicionar ao Carrinho - {item.title} </h1>
            <Count onConfirm={addToCart} maxQuantity={item.max} />
        </>
    );
}

export default ItemDetail;