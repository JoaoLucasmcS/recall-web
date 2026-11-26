import {useState} from "react";
import {limparDescricao} from "@/lib/texto";
import type {CampeaoDetalhe} from "@/types/campeao";

const TECLAS = ["Q", "W", "E", "R"]

function Habilidades({campeao}: { campeao: CampeaoDetalhe }) {
    // junta passiva + Q/W/E/R numa lista só, para navegar entre elas com abas
    const habilidades = [
        {tecla: "P", name: campeao.passive.name, description: campeao.passive.description, imagem_url: campeao.passive.imagem_url},
        ...campeao.spells.map((spell, indice) => ({...spell, tecla: TECLAS[indice]})),
    ]
    const [selecionada, setSelecionada] = useState(0)
    const atual = habilidades[selecionada]

    return (
        <div>
            <div className="flex gap-3">
                {habilidades.map((habilidade, indice) => (
                    <button
                        key={habilidade.tecla}
                        type="button"
                        onClick={() => setSelecionada(indice)}
                        aria-label={`${habilidade.tecla}: ${habilidade.name}`}
                        className={`relative cursor-pointer overflow-hidden rounded-xl ring-2 transition ${
                            indice === selecionada
                                ? "scale-110 ring-violet-500 shadow-lg shadow-violet-500/40"
                                : "opacity-60 ring-transparent hover:opacity-100"
                        }`}
                    >
                        <img src={habilidade.imagem_url} alt="" className="size-14 sm:size-16"/>
                        <span className="absolute right-0 bottom-0 rounded-tl-md bg-black/70 px-1.5 text-xs font-bold text-white">
                            {habilidade.tecla}
                        </span>
                    </button>
                ))}
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-900/10 bg-white/60 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-sm font-bold text-violet-600 dark:text-violet-400">{atual.tecla}</span>
                    <h3 className="text-xl font-semibold">{atual.name}</h3>
                </div>

                {"cooldownBurn" in atual && (
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                        <span>Recarga: <strong className="text-zinc-800 dark:text-zinc-200">{atual.cooldownBurn}s</strong></span>
                        {atual.costBurn !== "0" && (
                            <span>Custo: <strong className="text-zinc-800 dark:text-zinc-200">{atual.costBurn}</strong></span>
                        )}
                    </div>
                )}

                <p className="mt-4 leading-relaxed whitespace-pre-line text-zinc-700 dark:text-zinc-300">
                    {limparDescricao(atual.description)}
                </p>
            </div>
        </div>
    )
}

export default Habilidades
