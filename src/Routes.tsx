import {Link, Route, BrowserRouter} from 'react-router-dom';
import {Home} from './pages/home';
import {Pos} from './pages/pos';


export default function Router()
{
  
 return(
  <BrowserRouter>
    <Route path="/" exact component={Home}></Route>
    <Route path="/list" component={Pos}></Route>
  </BrowserRouter>
 )
}

