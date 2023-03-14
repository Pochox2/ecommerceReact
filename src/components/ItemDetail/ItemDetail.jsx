import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import Buttons from "../BuyButton/BuyButton"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail ({producto}) {


    const [isCount, setIsCount] = useState(true)
    const {addCart} = useCartContext()


    function onAdd(cantidad){
        console.log(producto)
        addCart ({ ...producto, cantidad})
        setIsCount(false)
    }

    return(
        <div className="detail">
        <div className="detai">
            <div >
                <img className="detailImg" src={producto.img}/>
            </div>
            <div className="detailDesc">
                <h2>{producto.nombre}</h2>
                <p>{producto.desc}</p>
            </div>
        </div>
            { isCount ?
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            : <Buttons/>
            }
        </div>
    )
}

export default ItemDetail