import Cart from "../Cart/Cart"


function Navbar() {
    return (
        <nav className="Navbar">
            <ul className="Menu">
                <li className="menuItem">Inicio</li>
                <li className="menuItem">Tienda</li>
                <li className="menuItem">Contacto</li>
            </ul>
            <Cart />
        </nav>
    )
}


export default Navbar