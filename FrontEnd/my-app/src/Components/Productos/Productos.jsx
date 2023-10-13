import React,{useState, useEffect} from "react"
import Carrito from "../Carrito/Carrito";
import './Productos.css'
const Productos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data,setData] = useState([])
    const [selectedCard, setSelectedCard] = useState({});
   

    useEffect(() =>{
        const getProductos = async () => {
            const response = await fetch('http://localhost:9999/producto', {
            headers: {
        
                'Accept-Version' : '1.0.0'
      
            }
            });
            const dataBaseData =  await response.json();
            const results = Object.values(dataBaseData)
            console.log(results[2]);
            setData(results[2])
        };

        getProductos()
        

    }, [])

    const handleUpdate = (data) =>{
        return data;

    }

    const clickModalHandler = (i,nombre,imagen,precio) =>{
        setSelectedCard({
            i,
            nombre,
            imagen,
            precio
        })
        console.log(selectedCard);
        console.log(1);
        setIsModalOpen(true)
       

    }

    const close = () =>{
        setIsModalOpen(false)
    }

return (
    <div className="B-container">
        
        <div className="card-container">
        {isModalOpen && (<Carrito data={selectedCard} isOpen={true} onUpdate={handleUpdate} onClose={close}/>)}
        {data.map((item,i)=> (
        
<section class="product" key={i}>
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				
				<img src={item.imagen[4]}/>
			</div>
			<div class="photo-album">
				<ul>
                <li><img src={item.imagen[0]} alt="green apple"/></li>
				<li><img src={item.imagen[1]} alt="yellow apple"/></li>
				<li><img src={item.imagen[2]} alt="orange apple"/></li>
				<li><img src={item.imagen[3]} alt="red apple"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="product__info">
     
    <h4>{item.nombre}</h4>

		<div class="description">
        <h2>Precio:{item.precio}</h2>
        <h2>Descuesto:{item.descuento}</h2>
        <h2>Valoracion:</h2>
            <div className=" ulContent">
			<ul >
				<li>{item.descripcion}</li>
				
			</ul>
            </div>
		</div>
		<button onClick={(e)=> clickModalHandler(item._id,item.nombre,item.imagen,item.precio)}class="buy--btn">ADD TO CART</button>
	</div>
</section>

    ))}
</div>
</div>
)
}

export default Productos;