import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
    const { CartGroup, removeCart, precioTotal, removeProduct } = useCartContext()
    return (
            <div>
                {
                    CartGroup.map(productCart => (
                        <div>
                            <p className="cart__dad" key={productCart.id}>
                                <img className="img__cart" src={productCart.img} alt={productCart.alt} />
                                <p className="cart__p">Nombre: {productCart.nombre}</p>
                                <p className="cart__p">Cantidad: {productCart.cantidad}</p>
                                <p className="cart__p">Precio: {productCart.precio}</p>
                                <p className="cart__p"><button onClick={()=>removeProduct(productCart.id)} className="btn__remove" >X</button></p>
                            </p>
                        </div>
                    ))
                }
                <p>{precioTotal() !== 0 && `El precio Total es: ${precioTotal()}`}</p>
                {/* <p>{precioTotal() !==0 && `Precio total: ${precioTotal()}`}</p> */}
                <button onClick={removeCart}>Vaciar carro</button>
            </div>
    )
}

export default CartContainer