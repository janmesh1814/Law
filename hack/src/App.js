import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './pages/index';
import About from './pages/about';
import LoginProf from './mycomponent/forms/loginprof';
import ProfRegister from './mycomponent/forms/ProfRegister';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUsr from './mycomponent/forms/loginuser';
import UserRegister from './mycomponent/forms/UserRegister';
import Home from './pages/home';

function App() {
    return (< >

        <BrowserRouter >
            <Routes>
                <Route exact path="/" element={< Index />} > </Route>
                <Route exact path="/home" element={< Home />} > </Route>
                <Route exact path="/About" element={< About />} > </Route>
                <Route exact path="/loginuser" element={<LoginUsr />} > </Route>
                <Route exact path="/loginprof" element={< LoginProf />} > </Route>
                <Route exact path='loginprof/profregister' element={< ProfRegister />} > </Route>
                <Route exact path='loginuser/userregister' element={< UserRegister />} > </Route>
            </Routes>
        </BrowserRouter>
    </>
    );
}

export default App;