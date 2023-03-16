import { NavLink } from "react-router-dom"
import Cart from "../Cart/Cart"

function Navbar() {
    return (
        <nav className="Navbar">
            <ul className="Menu">
                <NavLink to="/" className="menuItem">Inicio</NavLink>
                <NavLink to="/categoria/bebidas" className="menuItem">Bebidas</NavLink>
                <NavLink to="/categoria/ropa" className="menuItem">Ropa</NavLink>
                <Cart />
            </ul>
        </nav>
    )
}


export default Navbar