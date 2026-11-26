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

function CabecalhoCampeao({campeao}: { campeao: CampeaoDetalhe }) {
    return (
        <section className="relative overflow-hidden">
            {/* splash art de fundo, com degradês para o texto ficar legível */}
            <img src={campeao.splash_url} alt="" className="absolute inset-0 size-full object-cover object-top"/>
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent"/>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-zinc-50 to-transparent dark:from-zinc-950"/>

            <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-end px-6 pt-10 pb-20 text-white">
                <Link to="/" className="mb-auto inline-flex w-fit items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-sm backdrop-blur-md transition hover:bg-black/50">
                    <ArrowLeft className="size-4"/>
                    Voltar à biblioteca
                </Link>

                <p className="text-lg text-violet-200 capitalize">{campeao.title}</p>
                <h1 className="text-6xl font-bold tracking-tight sm:text-8xl">{campeao.name}</h1>

                <div className="mt-5 flex flex-wrap gap-2">
                    {campeao.tags.map((tag) => {
                        const classe = buscarClasse(tag)
                        const Icone = classe?.icone
                        return (
                            <span key={tag} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                                {Icone && <Icone className="size-3.5"/>}
                                {classe?.nome ?? tag}
                            </span>
                        )
                    })}
                    {campeao.partype && (
                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                            {campeao.partype}
                        </span>
                    )}
                </div>

                {/* barras de 0 a 10 com os atributos do campeão */}
                <div className="mt-8 grid max-w-md grid-cols-2 gap-x-8 gap-y-3">
                    {ATRIBUTOS.map(({chave, nome, cor}) => (
                        <div key={chave}>
                            <div className="mb-1 flex justify-between text-xs text-white/70">
                                <span>{nome}</span>
                                <span>{campeao.info[chave]}/10</span>
                            </div>
                            <div className="h-1.5 rounded-full bg-white/15">
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
