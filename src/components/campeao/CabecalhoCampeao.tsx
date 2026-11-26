import {ArrowLeft} from "lucide-react";
import {Link} from "react-router";
import {buscarClasse} from "@/lib/classes";
import type {CampeaoDetalhe} from "@/types/campeao";

const ATRIBUTOS = [
    {chave: "attack", nome: "Ataque", cor: "bg-rose-500"},
    {chave: "defense", nome: "Defesa", cor: "bg-emerald-500"},
    {chave: "magic", nome: "Magia", cor: "bg-sky-500"},
    {chave: "difficulty", nome: "Dificuldade", cor: "bg-violet-500"},
] as const

// No celular a splash aparece inteira em cima e o texto fica embaixo dela.
// A partir de "md" (telas médias) a splash vira fundo e o texto fica por cima, à esquerda.
const pilula = "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm backdrop-blur-md border-zinc-900/10 bg-white/60 dark:border-white/15 dark:bg-white/10 md:border-white/20 md:bg-white/10"

function CabecalhoCampeao({campeao}: { campeao: CampeaoDetalhe }) {
    return (
        <section className="relative overflow-hidden">
            <div className="relative md:absolute md:inset-0">
                <img
                    src={campeao.splash_url}
                    alt=""
                    className="aspect-1215/717 w-full object-cover md:aspect-auto md:size-full md:object-[center_20%]"
                />
                {/* celular: só um esmaecido embaixo, emendando a imagem com o fundo da página */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-zinc-50 to-transparent md:hidden dark:from-zinc-950"/>
                {/* telas maiores: escurece só o lado do texto e a parte de baixo */}
                <div className="absolute inset-0 hidden bg-linear-to-r from-black/80 via-black/25 to-transparent md:block"/>
                <div className="absolute inset-x-0 bottom-0 hidden h-32 bg-linear-to-t from-zinc-50 to-transparent md:block dark:from-zinc-950"/>
            </div>

            <Link to="/" className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-sm text-white backdrop-blur-md transition hover:bg-black/60 md:top-8 md:left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
                <ArrowLeft className="size-4"/>
                Voltar
            </Link>

            {/* no desktop a altura acompanha a proporção da splash (≈ 59% da largura), com limites */}
            <div className="relative mx-auto max-w-7xl px-6 pb-10 md:flex md:h-[max(520px,min(85svh,59vw))] md:flex-col md:justify-end md:pb-16 md:text-white">
                <p className="text-violet-700 capitalize md:text-lg dark:text-violet-200 md:text-violet-200">{campeao.title}</p>
                <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">{campeao.name}</h1>

                <div className="mt-4 flex flex-wrap gap-2">
                    {campeao.tags.map((tag) => {
                        const classe = buscarClasse(tag)
                        const Icone = classe?.icone
                        return (
                            <span key={tag} className={pilula}>
                                {Icone && <Icone className="size-3.5"/>}
                                {classe?.nome ?? tag}
                            </span>
                        )
                    })}
                    {campeao.partype && <span className={pilula}>{campeao.partype}</span>}
                </div>

                {/* barras de 0 a 10 com os atributos do campeão */}
                <div className="mt-6 grid max-w-md grid-cols-2 gap-x-8 gap-y-3 md:mt-8">
                    {ATRIBUTOS.map(({chave, nome, cor}) => (
                        <div key={chave}>
                            <div className="mb-1 flex justify-between text-xs text-zinc-500 dark:text-white/70 md:text-white/70">
                                <span>{nome}</span>
                                <span>{campeao.info[chave]}/10</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-zinc-900/10 dark:bg-white/15 md:bg-white/15">
                                <div className={`h-full rounded-full ${cor}`} style={{width: `${campeao.info[chave] * 10}%`}}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CabecalhoCampeao
