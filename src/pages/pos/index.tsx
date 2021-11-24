import react, {useState} from "react";
import './style.scss';
import imgUser from  './../../assets/img/perfil.png';
import axios from "axios";
import {getPlaylistUser,id_cliente,client_secret,redirect_uri} from './../../service';
import  {MenuProdutDesc} from './../../components/menu_product_desc';
import {Card_Products} from './../../components/card_products';
import { Link } from "react-router-dom";

 
function getUrlCode()
{
  
  let getUrls= window.location.href
  let get_code = getUrls.split('=')
  if(get_code.length===2)
  {
   localStorage.setItem('codeUser',get_code[1]);
  }
  return localStorage.getItem('codeUser') || '';
}
var codeUser = getUrlCode();







export function Pos (){

  function verifique()
  {
    if (codeUser) {
      //alert("entrou11")
      var codeUserRespos = localStorage.getItem("codeUser");
      var body = `
      
      `
    axios.post('https://accounts.spotify.com/api/token',
    {
      headers: {"Authorization": "Basic " +(new Buffer( id_cliente + ':' + client_secret).toString('base64'))},
      data: `
      code :${codeUserRespos},
      grant_type:authorization_code,
      redirect_uri : ${redirect_uri}
      `
    }
    ).then(response =>{
      alert(response.data)
      return response!.data
    })
     
    }
  }
  verifique()
     
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