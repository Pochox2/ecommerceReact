import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import iFetch from "../../utils/iFetch"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [producto, pintarProducto] = useState ({})
    const {idProducto}= useParams()

    useEffect(() =>{
        iFetch (idProducto)
        .then (resp => pintarProducto(resp))
    },[])

    return (
        <ItemDetail producto={producto}/>
    )
}

export default ItemDetailContainer