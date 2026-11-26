import {useEffect, useState} from "react";
import {Link, useParams} from "react-router";
import CabecalhoCampeao from "@/components/campeao/CabecalhoCampeao";
import Dicas from "@/components/campeao/Dicas";
import Habilidades from "@/components/campeao/Habilidades";
import Skins from "@/components/campeao/Skins";
import {useCampeao} from "@/hooks/useCampeao";

// título padrão de cada seção da página
function Secao({titulo, children}: { titulo: string, children: React.ReactNode }) {
    return (
        <section className="mx-auto max-w-7xl px-6 py-10">
            <h2 className="mb-6 text-2xl font-bold tracking-tight">{titulo}</h2>
            {children}
        </section>
    )
}

function Campeao() {
    // useParams lê o :id da URL (/campeao/Ahri → id = "Ahri")
    const {id = ""} = useParams()
    const {campeao, status} = useCampeao(id)
    const [historiaCompleta, setHistoriaCompleta] = useState(false)

    // ao abrir a página, volta para o topo (senão ela abre na altura em que estava a biblioteca)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (status === "carregando") {
        return <div className="h-[560px] animate-pulse bg-zinc-200 dark:bg-zinc-900"/>
    }

    if (status !== "ok" || !campeao) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-32 text-center">
                <p className="text-2xl font-semibold">
                    {status === "nao_encontrado" ? "Campeão não encontrado." : "Não foi possível carregar o campeão agora."}
                </p>
                <Link to="/" className="mt-6 inline-block text-violet-600 hover:underline dark:text-violet-400">
                    Voltar à biblioteca
                </Link>
            </div>
        )
    }

    return (
        <main className="relative pb-20">
            <CabecalhoCampeao campeao={campeao}/>

            <Secao titulo="História">
                <p className="max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {historiaCompleta ? campeao.lore : campeao.blurb}
                </p>
                <button
                    type="button"
                    onClick={() => setHistoriaCompleta(!historiaCompleta)}
                    className="mt-4 cursor-pointer font-medium text-violet-600 hover:underline dark:text-violet-400"
                >
                    {historiaCompleta ? "Mostrar menos" : "Ler história completa"}
                </button>
            </Secao>

            <Secao titulo="Habilidades">
                <Habilidades campeao={campeao}/>
            </Secao>

            {(campeao.allytips.length > 0 || campeao.enemytips.length > 0) && (
                <Secao titulo="Dicas">
                    <Dicas campeao={campeao}/>
                </Secao>
            )}

            <Secao titulo={`Skins (${campeao.skins.length})`}>
                <Skins campeao={campeao}/>
            </Secao>
        </main>
    )
}

export default Campeao
