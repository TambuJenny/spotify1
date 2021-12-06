import  React, {useState} from "react";
import './style.scss';
import { AxiosResponse, AxiosError } from 'axios'
import { useHistory } from "react-router";
import {api, getToken,callSpotifyAccount} from "../../service";
import { Link } from "react-router-dom";
import flameImg from './../../assets/img/imgFlame.png'
import CardError from './../../components/Errorobj/index'
import {ObjSearch,playlistdata} from './../../components/obj_search/index'


 getToken()
 let token = localStorage.getItem('token')
const response_playlist = api.get('/v1/browse/categories?local=sv_US',
{
   headers:{
     "Accept": "application/json",
     "Content-Type": "application/json",
     "Authorization":`Bearer ${token}`
   }
   
}
)


 const search_playlist= ()=>{

  

}
    

    type categories={
                items:[
                {
                 href?:string,
                 name ?:string,
                 icons:[{
                      
                        height?:number,
                        url?:string,
                        width?:number
                 }]
                }]
          }
        
          function getMusicPlaylist()
          {
            let token = localStorage.getItem('token')
            const inpt = document.getElementById('btn') as HTMLButtonElement
            var a = inpt?.type
          console.log('teste', a)   
         }
          getMusicPlaylist()
      
          function overClickButton(name:string)
          {
              var getbutton = document.getElementById(`${name}`)
              if(getbutton?.classList.contains('overeffect'))
              {
                getbutton?.classList.remove('overeffect') 
              }else
              {
                getbutton?.classList.add('overeffect')  
              }
              getbutton?.addEventListener("click",(e)=>{
                   
              })
             
              

          }

export  function Home ()
{   
  const [search_play, setsearch_play] = useState();
  const [search,setsearch] = useState ('');
  const [keyValue, setkeyvalue]= useState(0);
  const [state,setstate]=useState(true)     
  const [playlist,setplaylist]=useState<categories>();
       const [Name, setName] = useState('');

          response_playlist.then(response => {
            setplaylist(response!.data.categories)
          }).catch(function(response){
                    setstate(false)
          })

          
         function presse ()
         {
            var id_element = document.getElementById('search_playlist');
            id_element?.addEventListener('keyup',((e)=>{
                //alert(e.preventDefault())
                console.log(e.key);
                
            }))
         }
         presse();
          
        
       //console.log(playlist)

 return(
  <div>
    
    <div className="barra">
        <div className="title_name">
    
         <div className="name">
             <div className="img">
                 <img src={flameImg} alt="" />
             </div>
              <h1> Laflame Space</h1>
         </div>
             <div className="input">
                 <button className="button" onClick={callSpotifyAccount} id="btn">my Spotify</button>
             </div>
        </div>
       
    </div>
  
     {/*<ObjSearch  ></ObjSearch>*/ } 
   
    <div className="img_playlist">
    
   <div className="nameplaylisandsearch">
   <p>Spotify Playlist: {Name} </p>  
   <input type="text" className="inputglobalText" id="search_playlist"   placeholder="Colar o link da PlayList" onChange={(e)=>{
   setsearch(e.target.value);

   api.get(`/v1/playlists/${search_play}/tracks`,
  {
    headers:{
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization":`Bearer ${token}`
    }
  }).then((data)=>{
        return data.data
  }).catch((e)=>{
    console.log('erro',e);
    
  })

   }}/>
  
   </div>
     { 
        playlist?.items.map(img =>(
      <button 

      id={img?.name}     
      onMouseOver={
        (e)=>{   
          setName(e.currentTarget!.value)
          setkeyvalue(keyValue+1)
          overClickButton(Name)  
          
          if(e.currentTarget?.classList.contains('overeffect'))
          {
            e.currentTarget?.classList.remove('overeffect') 
          }else
          {
            e.currentTarget?.classList.add('overeffect')  
          } 
     }
      }
      /*onClick={
        (e)=>{
         console.log(e.currentTarget!.value);
         
        }
      }*/
       value={img?.name}
       > <img key ={keyValue.toString()} src={img.icons[0].url} id="img1" className=""  />
       </button>
     ))
     }
        { !state ? <CardError/> : null}
    </div>
   
  </div>
 )
}