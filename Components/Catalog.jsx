import products from "../products"
import ProductCard from "./ProductCard"

function Catalog(){
    const cards = products.map(p => <ProductCard key={p.id} product = {p}/>)

    return <div className="catalog-board">
        {cards}
    </div>
    // return <pre>
    //     {JSON.stringify(products, null, 2)}
    // </pre>
}



export default Catalog