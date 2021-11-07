import react, {useState} from "react";
import './style.scss';
import imgUser from  './../../assets/img/perfil.png';
import {getPlaylistUser,getTokenUser} from './../../service';
import  {MenuProdutDesc} from './../../components/menu_product_desc';
import {Card_Products} from './../../components/card_products';
import { Link } from "react-router-dom";

let CodeUser=""
function getUrlCode()
{
  
  let getUrls= window.location.href
  let get_code = getUrls.split('=')
  
  if(get_code.length===2)
  {
   localStorage.setItem('codeUser',get_code[1])
   CodeUser = localStorage.getItem('codeUser') || ''
   //console.log('esta',localStorage.getItem('codeUser'))
  }
}

function verifique()
{
  if (CodeUser) {
    alert("entrou11")
    console.log("olelel:",CodeUser);
    getUrlCode()
  }
}

verifique()
getTokenUser(CodeUser) 



export function Pos (){

     
     
 return(
    <div className="allComponentediv">
     <header className="header">
      <div className="contente_data">
      <Link to="/" id="appName"> <p >Yummy</p></Link>
       <p id="tablenumber" >Tables 3/12</p>
       <p id="queue" >Queue 3</p>
      </div>
      <div className="contente_search">
       <input type="text" name="" id="" />
      </div>
      <div className="contente_user">
       <p>Jessica J.</p>
     <div className="img">
     <img src={imgUser} alt=""/>
     </div>
      </div>
     </header>
     <body>
     <div className="principal">
     <MenuProdutDesc></MenuProdutDesc>
     <div className="space"></div>
     <div className="products">
     <Card_Products img="" product="" price={25.8}></Card_Products>
                   
     </div>
     </div>
     </body>

    </div>
 )
}

export 
 {
      MenuProdutDesc,
      Card_Products
 }