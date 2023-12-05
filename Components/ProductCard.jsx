import { useState } from "react"


export default function ProductCard({product}){
    const [bgColor, setBgColor] = useState('blue')
    
    const cardStyle = { backgroundColor: bgColor}

    return <div className="product-card" style={cardStyle} 
            onClick={()=> setBgColor(getRandomColor())}>
        {/* <pre>{JSON.stringify(props.product, null, 2)}</pre> */}
        <h3>{product.name}</h3>
        <div className="price">
            $ {product.price}
            </div>
        </div>
}

function getRandomColor(){
    const randomColor = Math.floor(Math.random()* 16777215)
    return '#' + randomColor.toString(16).padStart(6, '0')
}