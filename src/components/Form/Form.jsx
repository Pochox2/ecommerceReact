import {ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const Formulario = ({generarOrden}, {handleOnChange}) => {
    return (
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
    )
}

export default Formulario