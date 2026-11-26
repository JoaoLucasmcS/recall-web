import {useEffect, useState} from "react";
import type {CampeaoDetalhe} from "@/types/campeao";

type Status = "carregando" | "ok" | "nao_encontrado" | "erro"

interface Resultado {
    id: string
    campeao: CampeaoDetalhe | null
    status: Status
}

export function useCampeao(id: string) {
    const [resultado, setResultado] = useState<Resultado>({id: "", campeao: null, status: "carregando"});

    // o [id] no final faz o efeito rodar de novo se o id da URL mudar
    useEffect(() => {
        // se o usuário trocar de campeão antes da resposta chegar, a resposta antiga é ignorada
        let ativo = true;

        fetch(`${import.meta.env.VITE_API_URL}/campeoes/${id}`)
            .then((resposta) => {
                if (resposta.status === 404) throw new Error("nao_encontrado");
                if (!resposta.ok) throw new Error("erro");
                return resposta.json();
            })
            .then((dados) => {
                if (ativo) setResultado({id, campeao: dados, status: "ok"});
            })
            .catch((erro) => {
                if (ativo) setResultado({id, campeao: null, status: erro.message === "nao_encontrado" ? "nao_encontrado" : "erro"});
            });

        return () => {
            ativo = false;
        };
    }, [id]);

    // enquanto o resultado guardado for de outro id, ainda estamos carregando o novo
    if (resultado.id !== id) return {campeao: null, status: "carregando" as Status};

    return resultado;
}
