import React from "react";
import './style.scss';
import img3 from './../../assets/img/P3.png';


type productsType={
 img:string,
 product:string,
 price: Number
}
export  function Card_Products(props:productsType)
{
 return(
   <div className="card_body">
    <div className="card_img">
     <img src={img3} alt="" />
    </div>
    <div className="card_description">
         <p>ALIEN PLACE</p>
         <label htmlFor="">8.00 R$</label>
    </div>
   </div>
  )
}