import react from 'react';
import './style.scss';


type playlistdata =
{
 description:String,
 followers: {
  total: Int32Array
 },
 images:{
  url:String
 },
 name:String,
 owner:
 {
  display_name:String
 }
}





export function ObjSearch()
{
 return(
  <div>
   <div className="card-search">
   <div className="card-img">
       <div className="img-div">
         <img src="" alt="" />
       </div>
       <h2>Title</h2>
       <p></p>
    </div>
    <div className="card-list">
     <div className="card-title">
     <tr>
         <td>TÍTULO</td>
         <td>ÁLBUM</td>
         <td>ADICIONADO EM </td>
         <td>TEMPO</td>
     </tr>
     </div>
     <div className="card-conteudo">
     <tr>
         <td>TÍTULO</td>
         <td>ÁLBUM</td>
         <td>ADICIONADO EM </td>
         <td>TEMPO</td>
     </tr>
     </div>
    </div>    
   </div>
  </div>
 )
}