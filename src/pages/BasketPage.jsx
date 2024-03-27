import { useContext } from "react"
import { BasketContext } from "../components/context/BasketContext"
import { Link } from "react-router-dom"
import BasketItem from "../components/BasketItem"


const BasketPage = () => {
 const {basket}= useContext(BasketContext)
 const totalAmount = basket.reduce((total,i)=> total + i.amount ,0)
 const totalPrice = basket.reduce((total,i)=> total + i.amount*i.price ,0)



  return (
    <div className="mt-5 pt-5 p-2">
      <h1>SEPET</h1>
      <div className="row">
<div className="col-md-8">
      <div>
      {basket.length===0 ? (
        <div className="text-center my-5">
          <p>Öncelikle sepete ürün ekleyin</p>
           <Link className="btn btn-primary" to={'/'}>
           Ürünlere git
           </Link>
        </div>
      ) :
      (
        basket.map((product)=>
          <BasketItem  key={product.id} product={product}/>)
      )}
      </div>
    </div>
    <div className="col-md-4 bg-dark p-5">
      <h2>Toplam Ürün sayısı: {totalAmount}</h2>
      <h2>Toplam Fiyat: ${totalPrice}</h2>

      <form className="d-flex">
        <input placeholder="Promo kodu" className="form-control" type="text" />
        <button className="btn btn-warning">Uygula</button>
      </form>

    </div>
    </div>
    </div>
  )
}

export default BasketPage