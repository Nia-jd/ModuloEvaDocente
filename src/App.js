/*
import SideBar from "./components/SideBar"
function App() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <SideBar />
      <h1 className="px-10 pb-10 pt-20 text-3xl font-bold">Lorem Ipsum</h1>
      <p className="md:columns-2 lg:columns-3 px-10 pb-10"></p>
    </div>
  );
}
export default App;
*/
      
import SideBar from "./components/SideBar";
import Eva from "./paginas/Eva";
import Cuestionarios from "./paginas/Gestion/Cuestionarios";
import InformeCuantitativo from "./paginas/Gestion/InformeCuantitativo";
import Evaluaron from "./paginas/InfoDirectivos/Evaluaron";
import IRCuantitativos from "./paginas/InfoDirectivos/IRCuantitativos"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-200 min-h-screen: 100vh">
      
      <BrowserRouter>
      <SideBar />
        <Routes>
          <Route path="/eva" element={<Eva/>}/>
          <Route path="/cuestionarios" element={<Cuestionarios/>}/>
          <Route path="/informecuantitativo" element={<InformeCuantitativo/>}/>
          <Route path="/evaluaron" element={<Evaluaron/>}/>
          <Route path="/ircuantitativos" element={<IRCuantitativos/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
  
}   
export default App;
