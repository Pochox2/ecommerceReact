import { useCartContext } from "../../context/CartContext"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { useState } from "react"
import { toast } from "react-toastify"
import Formulario from "../Form/Form";
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
                </div>
    }
    
    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm, 
            [evt.target.name]: evt.target.value
        })

    }

    console.log(dataForm)

    return (
            <div className="cart_cont">
                <CartItems CartGroup={CartGroup}/>
                <p>{precioTotal() !== 0 && `El precio Total es: ${precioTotal()}`}</p>
                <button className="btn_vaciar" onClick={removeCart}>Vaciar carro</button>
                
                <Formulario generarOrden={generarOrden} handleOnChange={handleOnChange} />

            </div>
    )
}

export default CartContainer