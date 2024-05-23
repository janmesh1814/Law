import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import LoginProf from './pages/loginprof';
import ProfRegister from './pages/ProfRegister';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUsr from './pages/loginuser';
import UserRegister from './pages/UserRegister';
import About from './pages/about';

function App() {
    return (
        <>
            <BrowserRouter >
                <Routes >
                    <Route exact path="/" element={< Home />} > </Route>
                    <Route exact path="/loginuser" element={< LoginUsr />} > </Route>
                    <Route exact path="/about" element={< About/>} > </Route>
                    <Route exact path="/loginprof" element={< LoginProf />} > </Route>
                    <Route exact path='loginprof/profregister' element={< ProfRegister />} > </Route>
                    <Route exact path='loginuser/userregister' element={< UserRegister />} > </Route>
                </Routes >
            </BrowserRouter>
        </>
    );
}

export default App;