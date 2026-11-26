import {useState} from "react";
import type {CampeaoDetalhe} from "@/types/campeao";

function Skins({campeao}: { campeao: CampeaoDetalhe }) {
    const [selecionada, setSelecionada] = useState(0)
    const skin = campeao.skins[selecionada]
    // a skin padrão vem do Data Dragon com o nome "default"
    const nomeDaSkin = (nome: string) => (nome === "default" ? campeao.name : nome)

    return (
        <div>
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-zinc-900/10 dark:ring-white/10">
                <img key={skin.num} src={skin.splash_url} alt={nomeDaSkin(skin.name)} className="aspect-video w-full object-cover"/>
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-6 pt-16 pb-5">
                    <p className="text-2xl font-semibold text-white">{nomeDaSkin(skin.name)}</p>
                    <p className="text-sm text-white/60">{selecionada + 1} de {campeao.skins.length}</p>
                </div>
            </div>

            {/* miniaturas: a fileira rola para o lado quando há muitas skins */}
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {campeao.skins.map((item, indice) => (
                    <button
                        key={item.num}
                        type="button"
                        onClick={() => setSelecionada(indice)}
                        aria-label={nomeDaSkin(item.name)}
                        className={`shrink-0 cursor-pointer overflow-hidden rounded-lg ring-2 transition ${
                            indice === selecionada ? "ring-violet-500" : "opacity-50 ring-transparent hover:opacity-100"
                        }`}
                    >
                        <img src={item.splash_url} alt="" loading="lazy" className="aspect-video w-36 object-cover"/>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Skins
