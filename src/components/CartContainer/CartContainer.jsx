import { useCartContext } from "../../context/CartContext"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { useState } from "react"
import { toast } from "react-toastify"

const CartContainer = () => {
    const [dataForm, setDataForm] = useState({
        nombre:"",
        celular:"",
        correo:"",
        correoValidado:""
    })
    const { CartGroup, removeCart, precioTotal, removeProduct } = useCartContext()
    
    const generarOrden = (event) => {
        event.preventDefault() 
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

    const validarCorreo = () => {
        if (dataForm.correo !== dataForm.correoValidado){
             toast ("Los correos electronicos ingresados son distintos")
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
            [evt.target.nombre]: evt.target.value
        })

    }

    console.log(dataForm)

    return (
            <div className="cart_cont">
                {
                    CartGroup.map(productCart => (
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
                <p>{precioTotal() !== 0 && `El precio Total es: ${precioTotal()}`}</p>
                <button className="btn_vaciar" onClick={removeCart}>Vaciar carro</button>
                
                <form onSubmit={generarOrden} className="formulario">
                    <h1 className="form_tt">Ingresar datos del comprador</h1>
                    <input 
                        value={dataForm.nombre} 
                        onChange={handleOnChange} 
                        className="form f_nombre" 
                        type="text" 
                        name="nombre" 
                        placeholder="Ingresar nombre" 
                        required/>
                    <input 
                        value={dataForm.celular} 
                        onChange={handleOnChange} 
                        className="form f_celular" 
                        type="text" 
                        name="celular" 
                        placeholder="ingresar telefono" 
                        required/>
                    <input 
                        value={dataForm.correo} 
                        onChange={handleOnChange} 
                        className="form f_correo" 
                        type="text" 
                        name="correo" 
                        placeholder="ingresar correo electronico" 
                        required/>
                    <input 
                        value={dataForm.correoValidado} 
                        onChange={handleOnChange} 
                        className="form f_correo2" 
                        type="text" 
                        name="correoValidado" 
                        placeholder="Validar correo electronico" 
                        required/>
                    <button onClick={validarCorreo} className="btn__form">Generar orden</button>
                </form>

            </div>
    )
}

export default CartContainer