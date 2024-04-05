import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './mycomponent/home';
import LoginProf from './mycomponent/loginprof';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUsr from './mycomponent/loginuser';

function App() {
  return (
    <>
<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
          <Route exact path="page1" element={<LoginUsr/>}></Route>
          <Route exact path="page2" element={<LoginProf/>}></Route>
          
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
