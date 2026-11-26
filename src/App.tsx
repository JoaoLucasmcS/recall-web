import {Route, Routes} from "react-router";
import Layout from "@/components/Layout";
import NaoEncontrado from "@/components/NaoEncontrado";
import Biblioteca from "@/pages/Biblioteca";
import Campeao from "@/pages/Campeao";

function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Biblioteca/>}/>
          <Route path="/campeao/:id" element={<Campeao/>}/>
          {/* "*" pega qualquer endereço que não bateu com as rotas de cima */}
          <Route path="*" element={<NaoEncontrado/>}/>
        </Route>
      </Routes>
  )
}

export default App
