import { useState } from "react"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast, ToastContainer } from "react-toastify"
import { useCartContext } from "../../context/CartContext"

import CartItems from "../CartItems/CartItems";

const CartContainer = () => {
    const [dataForm, setDataForm] = useState({
        nombre:"",
        celular:"",
        correo:"",
        correoValidado:""
    })
    const { CartGroup, removeCart, precioTotal } = useCartContext()


    const generarOrden = (event) => {
        event.preventDefault() 
        if (dataForm.correo !== dataForm.correoValidado){
            toast ("Los correos electronicos ingresados son distintos")
       }else{
        const orden = {}
        orden.comprador = dataForm
        orden.isActive  = true
        orden.precioTotal = precioTotal()
        orden.productos = CartGroup.map(({Nombre, Precio, id}) => ({Nombre, Precio, id}))
        
        const db = getFirestore()
        const queryCollec = collection(db, "ordenes")

        addDoc(queryCollec, orden)
        .then (resp => console.log(resp))
        .catch (err => console.log(err))
        .finally (() => {
            removeCart()
            setDataForm({
                nombre:"",
                celular:"",
                correo:"",
                correoValidado:""
            })
        })
       }
       
    }
    
    if(CartGroup.length===0) {
        return <div className="nopro_cont">
                    <h2 className="noproducts">No hay productos en el carro</h2>
                    <h3>Su numero de orden es: {dataForm.id}</h3>
                </div>
    }
    
    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm, 
            [evt.target.name]: evt.target.value
        })

    }

    return (
            <div className="cart_cont">
                <CartItems CartGroup={CartGroup}/>
                <p>{precioTotal() !== 0 && `El precio Total es: ${precioTotal()}`}</p>
                <button className="btn_vaciar" onClick={removeCart}>Vaciar carro</button>
                
                <form onSubmit={generarOrden} className="formulario">
                    <h1 className="form_tt">Ingresar datos del comprador</h1>
                    <input 
                        // value={dataForm.nombre} 
                        onChange={handleOnChange} 
                        className="form f_nombre" 
                        type="text" 
                        name="nombre" 
                        placeholder="Ingresar nombre" 
                        required/>
                    <input 
                        // value={dataForm.celular} 
                        onChange={handleOnChange} 
                        className="form f_celular" 
                        type="text" 
                        name="celular" 
                        placeholder="ingresar telefono" 
                        required/>
                    <input 
                        // value={dataForm.correo} 
                        onChange={handleOnChange} 
                        className="form f_correo" 
                        type="mail" 
                        name="correo" 
                        placeholder="ingresar correo electronico" 
                        required/>
                    <input 
                        // value={dataForm.correoValidado} 
                        onChange={handleOnChange} 
                        className="form f_correo2" 
                        type="mail" 
                        name="correoValidado" 
                        placeholder="Validar correo electronico" 
                        required/>
                        <div>
                    <button type="submit" className="btn__form">Generar orden</button>
                    <ToastContainer/>
                        </div>
                </form>
            </div>
    )
}

export default CartContainer