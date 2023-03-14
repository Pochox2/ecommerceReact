let productos = [
    {id:"1", categoria:"bebidas", nombre: "Monster sabor Mango", precio: "$350", img:"/public/img/monstermango.jpg", alt:"Imagen de una lata de Monster Energy", desc:"Abre un lata de Monster Energy, la bebida más energética en el planeta. Es la combinación ideal de ingredientes y contiene la proporción adecuada para hacer el trabajo que sólo Monster puede. Monster tiene un sabor intenso pero suave. Atletas, músicos, anarquistas, estudiantes, guerreros de la carretera, roqueros, intelectuales, los modernos y a los motociclistas les encanta." },
    {id:"2", categoria:"bebidas", nombre: "Monster sabor Guarana", precio: "$350", img:"/public/img/monsternegra.jpg", alt:"Imagen de una lata de Monster Energy", desc:"Abre un lata de Monster Energy, la bebida más energética en el planeta. Es la combinación ideal de ingredientes y contiene la proporción adecuada para hacer el trabajo que sólo Monster puede. Monster tiene un sabor intenso pero suave. Atletas, músicos, anarquistas, estudiantes, guerreros de la carretera, roqueros, intelectuales, los modernos y a los motociclistas les encanta." },
    {id:"3", categoria:"bebidas", nombre: "Monster sabor Naranja", precio: "$350", img:"/public/img/monsterblanca.jpg", alt:"Imagen de una lata de Monster Energy", desc:"Abre un lata de Monster Energy, la bebida más energética en el planeta. Es la combinación ideal de ingredientes y contiene la proporción adecuada para hacer el trabajo que sólo Monster puede. Monster tiene un sabor intenso pero suave. Atletas, músicos, anarquistas, estudiantes, guerreros de la carretera, roqueros, intelectuales, los modernos y a los motociclistas les encanta." },
    {id:"4", categoria:"ropa", nombre: "Remera Monster", precio: "$3500", img:"/public/img/monsterremera.png", alt:"Imagen de una remera de la marca Monster Energy", desc:"Remera manga corta, cuello redondo, regular fit, con estampa en altura .Pertenece a la linea Monster. Tela Jersey 100% algodón peinado. Lavado suavizado. Industria Argentina" },
    {id:"5", categoria:"ropa", nombre: "Buzo Monster", precio: "$7000", img:"/public/img/monsterbuzo.png", alt:"Imagen de un buzo de la marca Monster Energy", desc:"El Buzo con Capucha tipo Canguro de Friza de Media Estacion de Algodonera Paso Viejo cómodo y de excelente calidad. Está fabricado en Algodón/Polyester de Alta Calidad." }
]

const iFetch = (id) => new Promise( (res, rej) => {
    let condicion = true
    if (condicion) {
        setTimeout(() => {
            res(id ? productos.find(producto=> id === producto.id) : productos)
        }, 800)
    } else {
        rej("Error al cargar productos")
    }
})

export default iFetch
