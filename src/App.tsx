import {useEffect, useState} from "react";
import type {CampeaoResumo} from "./types/campeao.ts";
import CardCampeao from "./components/CardCampeao.tsx";

function App() {

  const [campeoes, setCampeoes] = useState<CampeaoResumo[]>([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/campeoes/`)
        .then((resposta) => resposta.json())
        .then((dados) => setCampeoes(dados))
  }, []);

  return (
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 p-6">
        {campeoes.map((campeao) => (
            <CardCampeao key={campeao.id} campeao={campeao} />
        ))}
      </div>
  )
}

export default App
