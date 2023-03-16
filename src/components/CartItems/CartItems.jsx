import { useCartContext } from "../../context/CartContext"

    const CartItems = ({CartGroup}) => {

        const {removeProduct} = useCartContext()

        return (
            <div className="cart_items">
                {
                    CartGroup.map (productCart => (
                        <div>
                            <p className="cart__dad" key={productCart.id}>
                                <img className="img__cart" src={productCart.Imagen} alt={productCart.alt} />
                                <p className="cart__p">Nombre: {productCart.Nombre}</p>
                                <p className="cart__p">Cantidad: {productCart.cantidad}</p>
                                <p className="cart__p">Precio: ${productCart.Precio}</p>
                                <p className="cart__p"><button onClick={()=>removeProduct(productCart.id)} className="btn__remove" >X</button></p>
                            </p>
                        </div>
                    ))
                }
            </div>
        )
    }

    export default CartItems