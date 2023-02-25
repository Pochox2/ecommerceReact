import ItemCount from "../ItemCount/ItemCount"

function ItemDetail ({producto}) {
    console.log(producto)
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
            <ItemCount initial={1} stock={10}/>
        </div>
    )
}

export default ItemDetail