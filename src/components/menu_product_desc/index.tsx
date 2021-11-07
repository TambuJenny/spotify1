import React from "react";
import './style.scss';
import { getToken } from "../../service";
import { getUrlCode} from '../../service'


export function MenuProdutDesc()
 {
  
 

function mostrar ()
{
 let getbtn = document.querySelector("#productsAll");
 if(getbtn!.classList.contains("productsAllCard"))
  {
   getbtn!.classList.remove("productsAllCard");
  }
  else
  {
   getbtn!.classList.add("productsAllCard")
  }
}

 getUrlCode()

  return(
   <div className="productDescrition">
    <div className="title">
     <p>Products</p>
    </div>
    <div className="body">
     <section className="section_op">
     <div className="title-options">
     <option value="title" id="title">Drinks</option>
   <button className="btnall" onClick={mostrar}>^</button>
     </div>
      <div  id ="productsAll"className="">
      <option value="" id="" className="option">Hot</option>
      <option value="" className="option">Cold</option>
      <option value="" id="" className="option">Juices & Smothies</option>
      <option value="" className="option">Speciality drinks</option>
     
      </div>
     </section>
    </div>
   </div>
  )
 }