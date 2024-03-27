import { Link, NavLink } from "react-router-dom"
import { FaShopify } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useContext } from 'react';

import api from "./Api";
import { ProductContext } from "../components/context/productContext"
import { BasketContext } from "./context/BasketContext";





const Header = () => {

  const [categories ,setCategories]= useState()
const {setSelectedCategory}= useContext(ProductContext);

const { basket }= useContext(BasketContext)

 const totalAmount = basket.reduce((total,i) => total + i.amount, 0)

  useEffect(()=>{
    api.get ("/products/categories")
    .then((res)=>setCategories(res.data))
    
    
      },[])


  return (
    <nav className="navbar navbar-dark bg-dark bg-black fixed-top navbar-expand-sm">
    <div className="container-fluid">
      <Link className="navbar-brand d-flex gap-3 align-items-center" to="/">  <FaShopify className="fs-1 text-warning" />
      
        Context Store
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="offcanvas offcanvas-end text-bg-dark"
        tabIndex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
            Context Store
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav align-items-md-center justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">
                Anasayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sepet">
                Sepet
                <span className="badge bg-danger ms-1">{totalAmount}</span>
               
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kategoriler
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                  <button
                  onClick={()=> setSelectedCategory('all')}
                    
                    className="dropdown-item">
                  Hepsi
                  </button>
                </li>
                {categories?.map((category,i)=> (

                 <li key={i}>
                  <button
                  onClick={()=> setSelectedCategory(category)}
                    
                    className="dropdown-item">
                   {category}
                  </button>
                </li>
                ))}
            
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex mt-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="aratılacak metin..."
            />
            <button className="btn btn-success" type="submit">
              Ara
            </button>
          </form> */}
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Header