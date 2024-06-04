import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginProf from './mycomponent/login';
import ProfRegister from './mycomponent/ProfRegister';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegister from './mycomponent/UserRegister';
import ChatPage from './mycomponent/chatpage';
import Law from './mycomponent/law'
import About from './mycomponent/about';
import Network from './mycomponent/network';
import Logout from './mycomponent/logout';
import NewsPage from './mycomponent/newsPage';
import Home from './mycomponent/home';

function App() {

    return ( < >



        <BrowserRouter >
            <Routes >
                <Route exact path="/" element={<Home/>} > </Route>
                    < Route exact path="/login" element={< LoginProf />} > </Route>
                    <Route exact path='/logout' element={<Logout/>}> </Route>  
        
        <Route exact path='/profregister'  element={< ProfRegister />} > </Route>  
      <  Route exact path='/userregister'
                                    element={< UserRegister />} > </Route>  
        <Route exact path='/about' element={<About/>}> </Route>
        <Route exact path='/news' element={<NewsPage/>}> </Route>
        <Route exact path='/law' element={<Network/>}></Route>
        <Route exact path='/chat' element={<ChatPage/>}> </Route>
        <Route exact path='/info' element={<Law/>}></Route>
       </Routes >  
       </BrowserRouter>  
       </>
                                    );
}

                                    export default App;