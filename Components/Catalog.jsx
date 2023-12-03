import products from "../products"
import ProductCard from "./ProductCard"

function Catalog(){
    const cards = products.map(p => <ProductCard key={p.id} product = {p}/>)

    return <div className="catalog">
        <h2>Catalog</h2> 
        <div className="catalog-board">
            {cards}
        </div>
    </div>;
}

export default Catalog