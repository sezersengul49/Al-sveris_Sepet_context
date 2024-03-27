//*context abone olma hook u
import { useContext } from "react"
import { ProductContext } from "../components/context/productContext"
import Loader from "../components/Loader";
import Card from "../components/Card";




const MainPage = () => {

  //*ürün verilerini al
  const {products,selectedCategory}= useContext(ProductContext);

  

  return (
    <div className="container mt-5 pt-5 p-md-5 my-5">
      <h1>{selectedCategory}</h1>
    
<div className="d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-5 my-5 mt-5 ">
    {!products ?   <Loader/> : products.map((item)=>  <Card key={item.id} product={item}/>  ) }
    </div>
    </div>
  )
}

export default MainPage; 