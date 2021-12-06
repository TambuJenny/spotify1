import React from "react";
import { useCallback,useState } from "react";
import './style.scss';
import { getToken } from "../../service";
import { getUrlCode} from '../../service'


export function MenuProdutDesc()
 {
  
  interface descrip_playlist
  {
    Nome:string,
    Time: Int16Array,
    nMusica: Int16Array,
    like: Int16Array,
    autor : String,
  }
 

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
 
  const [description, setdescription]= useState<descrip_playlist> ();
  return(
   <div className="productDescrition">
    <div className="title">
     <p>Playlist Name </p>
    </div>
    <div className="body">
     <section className="section_op">
     <div className="title-options">
     <option value="title" id="title">Description</option>
   <button className="btnall" onClick={mostrar}>^</button>
     </div>
      <div  id ="productsAll"className="">
      <option value="" id="" className="option">{'Nome: '+ description?.Nome || +' NOME'}</option>
      <option value="" className="option">Cold</option>
      <option value="" id="" className="option">Juices & Smothies</option>
      <option value="" className="option">Speciality drinks</option>
     
      </div>
     </section>
    </div>
   </div>
  )
 }