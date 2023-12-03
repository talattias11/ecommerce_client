function ProductCard(props){
    const product = props.product
    return <div className="product-card">
        {/* <pre>{JSON.stringify(props.product, null, 2)}</pre> */}
        <h3>{product.name}</h3>
        <div className="price">
            $ {product.price}
            </div>
        </div>
}

export default ProductCard