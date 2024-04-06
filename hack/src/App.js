import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './mycomponent/home';
import LoginProf from './mycomponent/loginprof';
import ProfRegister from './mycomponent/ProfRegister';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUsr from './mycomponent/loginuser';
import UserRegister from './mycomponent/UserRegister';

function App() {
  return ( <>
    
       < BrowserRouter >
      <Routes >
        <Route exact path="/"element={< Home />} > </Route> 
       < Route exact path="/loginuser" element={< LoginUsr />} > </Route> 
        <Route exact path="/loginprof"element={< LoginProf />} > </Route> 
        <Route exact path='loginprof/profregister'
                element={< ProfRegister />} > </Route> 
        <Route exact path='loginuser/userregister'
                  element={< UserRegister />} > </Route> 
                  </Routes > 
        </BrowserRouter> 
        </>
                  );
}

export default App;