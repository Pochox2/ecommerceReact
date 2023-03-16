import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import ItemList from "../ItemList/ItemList"
import Loader from "../Loader/Loader"
    
function ItemListContainer() {
    const [productos, pintarProductos] = useState ([])
    const [cargando, pintarCargando] = useState(true)
    const {idCategoria} = useParams ()


    useEffect(()=>{
        const db = getFirestore()
        const queryCollec = collection(db, `Productos`)
        const queryFilter = idCategoria ? query(queryCollec, where(`Categoria`, `==`, idCategoria)) : queryCollec;
        if(db){
            getDocs(queryFilter)
            .then  (respCollection => { pintarProductos(respCollection.docs.map(producto => ({id:producto.id, ...producto.data()} )) )})
            .catch (err => console.error(err))
            .finally(()=> pintarCargando(false))}
            
            else {
                getDocs(queryFilter)
                .then(respCollection => pintarProductos(respCollection))
                .catch(err => console.error(err))
                .finally(() => pintarCargando(false))
            }
        }, [idCategoria])
        

 

    return (
        <>
            { cargando ?
            <Loader/>
            :<>
            <ItemList productos={productos} />
            </>}        
        </>
    ) 
}

export default ItemListContainer