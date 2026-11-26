import {Route, Routes} from "react-router";
import Layout from "@/components/Layout";
import Biblioteca from "@/pages/Biblioteca";
import Campeao from "@/pages/Campeao";

function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Biblioteca/>}/>
          <Route path="/campeao/:id" element={<Campeao/>}/>
        </Route>
      </Routes>
  )
}

export default App
