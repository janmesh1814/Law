import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './mycomponent/home';
import LoginProf from './mycomponent/loginprof';
import Register from './mycomponent/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUsr from './mycomponent/loginuser';
import LoginPage from './mycomponent/login';
function App() {
  return (
    <>
<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
          <Route exact path="page1" element={<LoginUsr/>}></Route>
          <Route exact path="page2" element={<LoginProf/>}></Route>
          <Route exact path='page1/Signupusr' element={<Register/>}></Route>
          <Route exact path='page2/Signupprof' element={<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
