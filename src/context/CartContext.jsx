import {createContext, useContext, useState } from "react";

export const CartContext = createContext ([])


export const useCartContext = () => {
    return useContext(CartContext)
} 


export const CartContextProv = ({children}) => {
    const [CartGroup, setCartGroup] = useState ([])

    const addCart = (newProducto) => {
        const prodId = CartGroup.findIndex(producto => producto.id === newProducto.id)
        if(prodId!==-1){
            CartGroup[prodId].cantidad += newProducto.cantidad
            setCartGroup([...CartGroup])
            return
        }
        setCartGroup([
            ...CartGroup, newProducto
        ])
    }

    const precioTotal = () => CartGroup.reduce( (count, producto) => count += (producto.cantidad*producto.Precio), 0)

    const cantTotal = () => CartGroup.reduce((count, producto) => count += producto.cantidad, 0)

    const removeProduct = (id) => setCartGroup(CartGroup.filter(producto => producto.id !== id))

    const removeCart = () => {
        setCartGroup([])
    }

    return (
        <CartContext.Provider value={{CartGroup, addCart, removeCart, precioTotal, removeProduct, cantTotal}}>
                {children}
        </CartContext.Provider>
        )
}
