import {useEffect, useState} from "react";
import type {CampeaoResumo} from "@/types/campeao";

export function useCampeoes() {
    const [campeoes, setCampeoes] = useState<CampeaoResumo[]>([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/campeoes/`)
            .then((resposta) => resposta.json())
            .then((dados) => setCampeoes(dados));
    }, []);

    return campeoes;
}
