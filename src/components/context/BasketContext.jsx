import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

 export const BasketContext =createContext();

 export const BasketProvider= ({children})=> {

    const [basket,setBasket] = useLocalStorage("sepet", []);

    const addToBasket =(newProduct)=> {
        //* ürün sepette vaar mı bak
       const found =basket.find((i)=> i.id === newProduct.id)
       if(found) {
//*ürün sepette varsa miktarını 1 arttır
      const updated= {...found, amount: found.amount+1};
     const newBasket =basket.map((i)=> (i.id===updated.id ? updated : i))

     setBasket(newBasket);
     toast.success(`Ürün mitarı arttrıldı (${updated.amount})`)

       }
        else {
            //*ürün sepette yoksa ürünü sepete ekle 1 olarak 
        setBasket(basket.concat({...newProduct, amount: 1}));

        toast.success("Ürün sepete eklendi")

       
    }
    };

    const removeFromBasket =(delete_id)=> {
const filtred =basket.filter((i)=> i.id!==delete_id);
setBasket(filtred)
toast.error("Ürün sepetten kaldırıldı")
    };

    //*miktar azaltan fonksiyon
    const decreateAmount= (delete_id)=> {
    const found= basket.find((i)=> i.id===delete_id)

    if(found.amount>1) {
   const updated = {...found, amount: found.amount -1 };

   const newBasket = basket.map((i)=> (i.id ===updated.id ? updated : i))
   setBasket(newBasket)

   toast.info("Ürün miktarı azaltıldı")
    }
    else {
    removeFromBasket(delete_id);
    }



    }
return  <BasketContext.Provider value= {{basket, addToBasket,removeFromBasket ,decreateAmount}}>
    {children}


</BasketContext.Provider>


 }