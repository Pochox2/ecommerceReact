import { Link } from "react-router-dom"
const Buttons= () => {

    return (
        <div>
            <Link to="/cart">
                <button className="addCart">Ir al carro para finalizar compra</button>
            </Link>
            <Link to="/">
                <button className="addCart">Continuar comprando</button>
            </Link>
        </div>
    )
}

export default Buttons