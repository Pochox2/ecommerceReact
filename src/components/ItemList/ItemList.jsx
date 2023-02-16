import CardItem from "../CardItem/CardItem";


function ItemList({productos}) {
    return(
        <div className="items">
        { productos.map (producto => (<CardItem key={producto.id} producto={producto} />))}
        </div>
        
    ) }
       
export default ItemList 
