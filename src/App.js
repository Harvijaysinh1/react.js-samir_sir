import { Route, Routes } from "react-router-dom";
import { Aboutus } from "./components/Aboutus";
import { Contectus } from "./components/Contectus";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Api } from "./components/Api";

function App(){

  
  return (<div>
    <Navbar/>
    <Api/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutus" element={<Aboutus/>}></Route>
      <Route path="/contectus" element={<Contectus/>}></Route>
    </Routes>
    
  
  </div>)
}

export default App;