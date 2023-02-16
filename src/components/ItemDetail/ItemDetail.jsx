
function ItemDetail ({producto}) {
    console.log(producto)
    return(
        <div className="detail">
            <div >
                <img className="detailImg" src={producto.img}/>
            </div>
            <div className="detailDesc">
                <h2>{producto.nombre}</h2>
                <p>{producto.desc}</p>
            </div>
        </div>
    )
}

export default ItemDetail