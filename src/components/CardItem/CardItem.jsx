import { Link } from "react-router-dom"

function CardItem ({producto}) {
    return (
        
        <div key={producto.id} className="cardItem">
            <div className="cardTop m-10"> {producto.nombre}</div>
            <div className="cardDescrip m-10">
                <img className="cardImg" src={producto.img} alt={producto.alt} />
                <label className="m-10">Categoria: {producto.categoria} </label>
                <label className="m-10">Precio: {producto.precio}</label>
            </div>
            <div className="m-10 cardButtom">
                <Link to={`/detalle/${producto.id}`}>
                <button className="cardBtn m-10">Detalle</button>
                </Link>
            </div>
        </div>
        
    )}

 export default CardItem