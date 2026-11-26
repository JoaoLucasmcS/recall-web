import {Crosshair, Heart, Shield, Sparkles, Sword, Swords} from "lucide-react";
import type {LucideIcon} from "lucide-react";

// As tags vêm do Data Dragon em inglês; aqui fica o nome em português e o ícone de cada uma
const CLASSES: { tag: string, nome: string, icone: LucideIcon }[] = [
    {tag: "Assassin", nome: "Assassino", icone: Swords},
    {tag: "Fighter", nome: "Lutador", icone: Sword},
    {tag: "Mage", nome: "Mago", icone: Sparkles},
    {tag: "Marksman", nome: "Atirador", icone: Crosshair},
    {tag: "Support", nome: "Suporte", icone: Heart},
    {tag: "Tank", nome: "Tanque", icone: Shield},
]

interface FiltroClasseProps {
    classes: string[]
    onClassesChange: (classes: string[]) => void
}

const estiloBase = "inline-flex h-9 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-medium transition"
const estiloAtivo = "border-violet-500 bg-violet-600 text-white shadow-lg shadow-violet-500/30"
const estiloInativo = "border-zinc-900/10 bg-white/70 text-zinc-600 hover:border-violet-500/50 hover:text-violet-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-violet-300"

function FiltroClasse({classes, onClassesChange}: FiltroClasseProps) {
    // se a classe já está marcada, tira da lista; se não está, adiciona
    const alternarClasse = (tag: string) =>
        onClassesChange(classes.includes(tag) ? classes.filter((c) => c !== tag) : [...classes, tag])

    return (
        <div className="flex flex-wrap gap-2">
            <button
                type="button"
                onClick={() => onClassesChange([])}
                aria-pressed={classes.length === 0}
                className={`${estiloBase} ${classes.length === 0 ? estiloAtivo : estiloInativo}`}
            >
                Todos
            </button>

            {CLASSES.map(({tag, nome, icone: Icone}) => (
                <button
                    key={tag}
                    type="button"
                    onClick={() => alternarClasse(tag)}
                    aria-pressed={classes.includes(tag)}
                    className={`${estiloBase} ${classes.includes(tag) ? estiloAtivo : estiloInativo}`}
                >
                    <Icone className="size-4"/>
                    {nome}
                </button>
            ))}
        </div>
    )
}

export default FiltroClasse
