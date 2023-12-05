import { useState } from "react"

export default function Counter(){
    // const [count, isCount] = useState(0)

    // return <>
    // <button onClick={()=> isCount(count - 1)}>-</button>
    // {count}
    // <button onClick={()=> isCount(count + 1)}>+</button>
    // </>
        const [count, setCount] = useState(0)
        const [inputVal, setInputVal] = useState(0)


        return <>
            <input type="number" value={inputVal} 
            onChange={e => setInputVal(Number(e.target.value))}/>
            <button onClick={() => setCount(count + inputVal)}>add</button>
            <h2>{count}</h2>
        </>
    }


