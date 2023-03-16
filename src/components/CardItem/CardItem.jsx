import { Link } from "react-router-dom"

function CardItem ({producto}) {
    return (
        
        <div key={producto.id} className="cardItem">
            <div className="cardTop m-10"> {producto.Nombre}</div>
            <div className="cardDescrip m-10">
                <img className="cardImg" src={producto.Imagen} alt={producto.Alt} />
                <label className="m-10">Categoria: {producto.Categoria} </label>
                <label className="m-10">Precio: ${producto.Precio}</label>
            </div>
            <div className="m-10 cardButtom">
                <Link to={`/detalle/${producto.id}`}>
                <button className="cardBtn m-10">Detalle</button>
                </Link>
            </div>
        </div>
        
    )}

 export default CardItem