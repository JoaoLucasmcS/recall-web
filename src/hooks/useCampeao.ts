import {useEffect, useState} from "react";
import {buscarNaApi, ErroApi} from "@/lib/api";
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

        buscarNaApi<CampeaoDetalhe>(`/campeoes/${id}`)
            .then((campeao) => {
                if (ativo) setResultado({id, campeao, status: "ok"});
            })
            .catch((erro) => {
                const naoEncontrado = erro instanceof ErroApi && erro.status === 404;
                if (ativo) setResultado({id, campeao: null, status: naoEncontrado ? "nao_encontrado" : "erro"});
            });

        return () => {
            ativo = false;
        };
    }, [id]);

    // enquanto o resultado guardado for de outro id, ainda estamos carregando o novo
    if (resultado.id !== id) return {campeao: null, status: "carregando" as Status};

    return resultado;
}
