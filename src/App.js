import { Route, Routes } from "react-router-dom";
import { Aboutus } from "./components/Aboutus";
import { Contectus } from "./components/Contectus";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Api } from "./components/Api";
import { Api2 } from "./components/Api2";
import { ApiTable } from "./components/ApiTable";

function App(){

  
  return (<div>
    <Navbar/>
    {/* <Api/>
    <Api2/> */}
    <ApiTable/>
      <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/aboutus" element={<Aboutus/>}></Route>
      <Route path="/contectus" element={<Contectus/>}></Route>
    </Routes>
    
  
  </div>)
}

export default App;