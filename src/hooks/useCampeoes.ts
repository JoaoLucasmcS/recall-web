import {useEffect, useState} from "react";
import {buscarNaApi} from "@/lib/api";
import type {CampeaoResumo} from "@/types/campeao";

type Status = "carregando" | "ok" | "erro"

export function useCampeoes() {
    const [campeoes, setCampeoes] = useState<CampeaoResumo[]>([]);
    const [status, setStatus] = useState<Status>("carregando");

    useEffect(() => {
        buscarNaApi<CampeaoResumo[]>("/campeoes/")
            .then((dados) => {
                setCampeoes(dados);
                setStatus("ok");
            })
            .catch(() => setStatus("erro"));
    }, []);

    return {campeoes, status};
}
