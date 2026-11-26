import {useEffect, useRef, useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import type {CampeaoDetalhe} from "@/types/campeao";

const botaoSeta = "flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/70"

function Skins({campeao}: { campeao: CampeaoDetalhe }) {
    const [selecionada, setSelecionada] = useState(0)
    const miniaturasRef = useRef<HTMLDivElement>(null)
    const total = campeao.skins.length
    const skin = campeao.skins[selecionada]

    // a skin padrão vem do Data Dragon com o nome "default"
    const nomeDaSkin = (nome: string) => (nome === "default" ? campeao.name : nome)

    // anda "passo" skins (−1 ou +1); o "% total" faz dar a volta: depois da última vem a primeira
    const andar = (passo: number) => setSelecionada((atual) => (atual + passo + total) % total)

    // centraliza a miniatura escolhida na fileira (rola só a fileira, não a página)
    useEffect(() => {
        const fileira = miniaturasRef.current
        const miniatura = fileira?.children[selecionada]
        if (!fileira || !miniatura) return
        // posições medidas na tela: quanto a miniatura está deslocada do centro da fileira
        const caixaFileira = fileira.getBoundingClientRect()
        const caixaMiniatura = miniatura.getBoundingClientRect()
        const deslocamento = caixaMiniatura.left + caixaMiniatura.width / 2 - (caixaFileira.left + caixaFileira.width / 2)
        fileira.scrollBy({left: deslocamento, behavior: "smooth"})
    }, [selecionada])

    return (
        <div>
            <div className="group relative overflow-hidden rounded-2xl ring-1 ring-zinc-900/10 dark:ring-white/10">
                <img key={skin.num} src={skin.splash_url} alt={nomeDaSkin(skin.name)} className="aspect-video w-full object-cover"/>

                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-6 pt-16 pb-5">
                    <p className="text-2xl font-semibold text-white">{nomeDaSkin(skin.name)}</p>
                    <p className="text-sm text-white/60">{selecionada + 1} de {total}</p>
                </div>

                {total > 1 && (
                    <>
                        <button type="button" onClick={() => andar(-1)} aria-label="Skin anterior"
                                className={`${botaoSeta} absolute top-1/2 left-4 -translate-y-1/2`}>
                            <ChevronLeft className="size-5"/>
                        </button>
                        <button type="button" onClick={() => andar(1)} aria-label="Próxima skin"
                                className={`${botaoSeta} absolute top-1/2 right-4 -translate-y-1/2`}>
                            <ChevronRight className="size-5"/>
                        </button>
                    </>
                )}
            </div>

            {/* fileira de miniaturas: rola para o lado sem barra de rolagem visível, com as bordas esmaecidas */}
            <div
                ref={miniaturasRef}
                className="mt-4 flex gap-3 overflow-x-auto p-1.5 [scrollbar-width:none] mask-[linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] [&::-webkit-scrollbar]:hidden"
            >
                {campeao.skins.map((item, indice) => (
                    <button
                        key={item.num}
                        type="button"
                        onClick={() => setSelecionada(indice)}
                        aria-label={nomeDaSkin(item.name)}
                        aria-current={indice === selecionada}
                        className={`shrink-0 cursor-pointer overflow-hidden rounded-lg ring-2 transition ${
                            indice === selecionada
                                ? "ring-violet-500 shadow-lg shadow-violet-500/30"
                                : "opacity-50 ring-transparent hover:opacity-100"
                        }`}
                    >
                        <img src={item.splash_url} alt="" loading="lazy" className="aspect-video w-32 object-cover sm:w-36"/>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Skins
