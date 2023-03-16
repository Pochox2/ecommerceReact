import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"
import { getDoc, getFirestore, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [loading, setLoading] = useState(true)
    const {idProducto}= useParams()

        useEffect(()=>{
            const db = getFirestore()
            const queryDoc= doc(db,"Productos", idProducto)
            getDoc(queryDoc)
            .then(respProd=> setProducto({id:respProd.id, ...respProd.data()}))
            .catch(err=> console.error(err))
            .finally(()=> setLoading(false))
        })

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