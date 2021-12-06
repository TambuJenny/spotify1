import react from 'react';
import './style.scss';


export type playlistdata =
 {
  description: String,
  followers: {
   total: Int32Array
  },
  images: {
   url: String
  },
  name: String,
  owner:
  {
   display_name: String,
   external_urls: {
    spotify: String
   }
  }
  primary_color: String,
  tracks: {
   items: {
    added_at: String,
   }
   total: Int16Array
   track: {
    album: {
     artists: [
      {
       name: string,
       type: string,
      }
     ],
     external_urls: {
      spotify: string
     },
     images: [
      {
       url: string
      }
     ],
     name: string

    },
    name: string,

   }
  }

 }



export function ObjSearch(objeto:playlistdata) {
 return (
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