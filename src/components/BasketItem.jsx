import { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { BasketContext } from "./context/BasketContext";

const BasketItem = ({ product}) => {
 const {addToBasket,removeFromBasket,decreateAmount} =useContext(BasketContext)
  return (
    <div className="bg-black align-items-center d-flex bg-secondary gap-3 gap-md-4 rounded p-3 p-md-4">

        <div className="border bg-white rounded-3">
<img className="object-fit-contain"
 src= {product.image} height={80} width={80} />

</div>


<div>
<p className="fw-bold">{product.title.length >20 ?
product.title.slice(0,20) + '...' : product.title}</p>
<p>Kategori: {product.category}</p>
<p> Reyting: {product.rating.rate}</p>
</div>


<div className="flex-grow-1 d-flex flex-column-reverse flex-md-row gap-4 align-items-center">
<div className="bg-dark d-flex align-items-center rounded-5 gap-4 overflow-hidden btn-wrapper">
  <button onClick={()=> decreateAmount(product.id)}>-</button>
  <span>{product.amount}</span>
  <button onClick={()=> addToBasket(product)}>+</button>  
</div>
<h4 className="flex-grow-1 ">${product.price*product.amount}</h4>
<button 
onClick={()=> removeFromBasket(product.id)} className="rounded-2 d-none d-md-block">
  <FaRegTrashCan /></button>
  </div>

    </div>
  )
}

export default BasketItem