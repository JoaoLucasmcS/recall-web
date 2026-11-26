import {useEffect, useState} from "react";
import {LoaderCircle} from "lucide-react";

const ESPERA_ANTES_DO_AVISO_MS = 4000

// A API roda no plano gratuito do Render, que "dorme" depois de 15 minutos sem uso.
// A primeira requisição depois disso pode levar até um minuto. Se o carregamento passar
// de alguns segundos, este aviso aparece para o usuário saber que não travou.
// Ele só existe enquanto a página está carregando, então o contador recomeça a cada carregamento.
function AvisoServidorAcordando() {
    const [demorou, setDemorou] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setDemorou(true), ESPERA_ANTES_DO_AVISO_MS)
        return () => clearTimeout(timer)
    }, [])

    if (!demorou) return null

    return (
        <div
            role="status"
            className="mx-auto mb-8 flex max-w-xl items-start gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/10 px-5 py-4 text-sm backdrop-blur-md"
        >
            <LoaderCircle className="mt-0.5 size-5 shrink-0 animate-spin text-violet-600 dark:text-violet-400"/>
            <div>
                <p className="font-semibold text-violet-800 dark:text-violet-200">Acordando o servidor…</p>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                    O Recall roda numa hospedagem gratuita que dorme quando ninguém está usando.
                    A primeira visita pode levar até um minuto; depois disso fica rápido.
                </p>
            </div>
        </div>
    )
}

export default AvisoServidorAcordando
