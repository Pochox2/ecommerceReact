import { NavLink } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

    
    const Cart = () => {
        const {cantTotal} = useCartContext()
        return (
           <NavLink to="/cart" >
               <button id="cartCesto"><i id="cartCesto" className="cart_cesto bi bi-minecart"> { cantTotal() > 0 && cantTotal() } <span id="cartContador"></span></i></button>
           </NavLink> 
        )
    }

    export default Cart