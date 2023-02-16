import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import iFetch from "../../utils/iFetch"
import ItemList from "../ItemList/ItemList"
    
function ItemListContainer() {
    const [productos, pintarProductos] = useState ([])
    const [cargando, pintarCargando] = useState(true)
    const {idCategoria} = useParams ()

    useEffect(() =>{
        if (idCategoria){
        iFetch()
        .then(ans => pintarProductos(ans.filter(producto => producto.categoria === idCategoria)))
        .catch(error => console.log(error))
        .finally(()=> pintarCargando(false))
    } else {
        iFetch()
        .then(ans => pintarProductos(ans))
        .catch(error=> console.log(error))
        .finally( ()=> pintarCargando(false))}
    }, [idCategoria])

 

    return (
        <>
            { cargando ?
            <h2>Cargando..</h2>
            :<>
            <ItemList productos={productos} />
            </>}        
        </>
    ) 
}

export default ItemListContainer