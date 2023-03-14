import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import iFetch from "../../utils/iFetch"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [loading, setLoading] = useState(true)
    const {idProducto}= useParams()

    useEffect(() =>{
        iFetch (idProducto)
        .then (resp => setProducto(resp))
        .catch(err => setProducto(err))
        .finally(() => setLoading(false))
    },[])

    return (
    <>{ loading ? 
        <Loader/>
        :
        <ItemDetail producto={producto}/>
    }
    </>
    )
}

export default ItemDetailContainer