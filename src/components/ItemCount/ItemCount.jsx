import { useState } from "react"

const ItemCount =({initial= 1, stock=10, onAdd}) => {

    const [count, setCount] = useState(initial)

    const sumar = ()=> {
        if (count<stock) {
            setCount(count + 1)
        }
        
    }

    const restar = ()=> {
        if (count > initial) {
            setCount(count - 1)
        }
    }

 return (
    <div>
        <div className="opContainer">
            <div className="operacion">
                <button className="operacionBtn" onClick={restar}> - </button>
            </div>
            <div>
                <center>
                    <label>{count}</label>            
                </center>
            </div>
            <div className="operacion">
                <button  className="operacionBtn" onClick={sumar}> + </button>
            </div>
        </div>
        <div>
            {/* <BuyButton className="addCart" onClick={()=>onAdd(count)} /> */}
            <button className="addCart" onClick={()=>onAdd(count)}>Agregar al carro</button>
        </div>
    </div>
)}


export default ItemCount
