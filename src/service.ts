import axios from "axios";
import React,{useState} from "react";


let id_cliente = "989d97c2053f426ab251479a12833bdc"; 
let client_secret ="d15f6e9e219d4a36a3db5ba685ea6058";
let codeByUrl:string = ''; 
localStorage.setItem('codeUser','undefined')
let spotify_Auth_Endpoint = "https://accounts.spotify.com/authorize"
let scopes = ["user-read-currently-playing","user-read-playback-state"];



let redirect_uri = "http://localhost:3000/list";

//http://localhost:3000/list?code=AQCeOYLPLAa0fMN-bCNBLP643Oe1yNAghkGEz8ZlfRPQrxxOsI3aVTrERG3OHyWdRiJe0bQdFPoLr2Te97-_1bOYpcNrb89cDlcEkaCaY2G6kLKHhy54FpcF6jL0WD6w1ki3QPOlJy6MKKJtol10yeU8aHywalkqiz_0kaWAd_Sh__95IbmR5mRjrFMpfgcPtgyUxMOuIbKBykCx1Wqn-7FlC19C0zCR_fzOThdl1kC8QO18BQ


export const api = axios.create({
 baseURL:"https://api.spotify.com"


})


export function get_Authorization()
{
  axios('https://accounts.spotify.com/authorize',
     {
       headers:{
         'response_type':'code',
         '&client_id=':id_cliente,

       }
     }
  )
}




  export async function  getToken()
{
 
 var responseToken = ""
 await axios("https://accounts.spotify.com/api/token",
 {
  headers:{
   'content-type':'application/x-www-form-urlencoded',
   'Authorization':"Basic " + btoa(id_cliente +":"+ client_secret )
  },
  data:"grant_type=client_credentials",
  method: "POST"
 }) .then(tokenresponse =>{

  if(tokenresponse.data.access_token)
   {
    responseToken = tokenresponse.data.access_token;
    localStorage.removeItem("token")
    localStorage.setItem("token",responseToken)
  // alert(responseToken)
    
  }
   else
   {
    responseToken = "Error"
   }
 
  
 })
 return responseToken; 

}


export  function  callSpotifyAccount()
{
  // alert(localStorage.getItem('codeUser'))
  // console.log(localStorage.getItem('codeUser'));
 

  if(localStorage.getItem('codeUser')!=="undefined" )
      {
        window.location.href=redirect_uri; 
      }
      else if(localStorage.getItem('codeUser')==="undefined")
      {
        window.location.href=`${spotify_Auth_Endpoint}?client_id=${id_cliente}&response_type=code&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`;  
     
      }
     
      
      
}

  export async function getUrlCode ()
{

  let getUrls= window.location.href
  let get_code = getUrls.split('=')

  if(get_code != null)
  {
    localStorage.removeItem('codeUser')
    localStorage.setItem('codeUser',get_code[1])
    codeByUrl=  localStorage.getItem('codeUser') || ''

    console.log(localStorage.getItem('codeUser'))
  }
 
 
}

export async  function getTokenUser(codeUserRespos: string )
{
  var getValueToken = '' ;
  codeUserRespos = localStorage.getItem('codeUser')?.toString() ||'';
  
  let formData = new FormData();
  formData.append('code:', codeUserRespos);
  formData.append('grant_type:','authorization_code');
  formData.append('redirect_uri:',redirect_uri);
  
   await axios('https://accounts.spotify.com/api/token',
  {
   headers:{
     formData,
   "Authorization": "Basic" +(new Buffer( id_cliente + ':' + client_secret).toString('base64')),
  },
  method:"POST", 
  data:formData
  }).then(getTokenValue  =>{
      getValueToken = getTokenValue!.data 
      console.log("resultado do Token",getValueToken);
      alert('boo')
  }).catch(function (tokken){
     console.log(tokken);
     
  })
      return getValueToken;
}

//getPlaylistUser

export async function getPlaylistUser()
{
 
  try {
    let listPlaylist = {}
    axios.get('https://api.spotify.com/v1/me/playlists',
    {
     headers:{
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":`Bearer BQDgeTXSHNnUTrZJd5IvSjM_x-Z75RN5SjBSLokHUToVciUfrW6mvS0FdPqLJX2M900Il1zWMiL9N-ZcNfOm58D_Ig2YOCj1OvsgP5K1J8avoagHJu-ZG3eeHJueuqKkvbEwKvBOU8rygn1GMAQx4a4UIFn8YzTdAePxLCOCsw4T`
     }
    }
    ) .then(playlists =>{
      if(playlists.data!.items)
      {
          listPlaylist= playlists.data!.items
      }
      //console.log("mais velho é mais velho ",listPlaylist)
    })
    
  } catch (error) {
    console.log(error)
  }
}









