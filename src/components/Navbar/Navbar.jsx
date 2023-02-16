import Cart from "../Cart/Cart"
import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="Navbar">
            <ul className="Menu">
                <NavLink to="/" className="menuItem">Inicio</NavLink>
                <NavLink to="/categoria/bebidas" className="menuItem">Bebidas</NavLink>
                <NavLink to="/categoria/ropa" className="menuItem">Ropa</NavLink>
            </ul>
            <Cart />
        </nav>
    )
}


export default Navbar