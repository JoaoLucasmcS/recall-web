import {useEffect, useState} from "react";
import {buscarNaApi} from "@/lib/api";

// Versão atual do Data Dragon (ex.: "16.23.1"); fica null até a API responder ou se ela falhar
export function usePatch() {
    const [versao, setVersao] = useState<string | null>(null);

    useEffect(() => {
        buscarNaApi<{ versao: string }>("/patch/")
            .then((patch) => setVersao(patch.versao))
            .catch(() => setVersao(null));
    }, []);

    return versao;
}
