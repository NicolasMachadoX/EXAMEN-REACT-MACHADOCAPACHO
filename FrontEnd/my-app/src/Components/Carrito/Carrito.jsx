import React,{useState, useEffect} from "react"
import './Carrito.css'

const Carrito = ({onClose,isOpen,onUpdate,data}) =>{
    const [newData, setNewData] = useState({
            nombre: data.nombre,
            precio: data.precio,
            descripcion: data.descripcion,
            imagen: data.imagen[4]



    });

    const [change,setChange] = useState(false)

    useEffect(()=>{
    
     

        const data = onUpdate(newData)
        setChange(true)
        if(change){
            const array = [data];
            console.log(array);
        
        }
        })

        const close = () =>{
            onClose()
        }
    return isOpen ?(
        <div className="carrito">
               <h1>Carrito de Compras</h1>
            <div className="content-carrito">
               <div className="cardSell">
                <img  className="imgCard" src={data.imagen}></img>
                <div className="order">
                <p className="pE">{data.nombre}</p>
                <p className="pE">{data.precio}</p>
                <p className="pE">{data.descripcion}</p>
                </div>
                <button onClick={close}>X</button>
               </div>
              

            </div>
        </div>
    ): null;
}


export default Carrito;