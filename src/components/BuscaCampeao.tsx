import {Search, X} from "lucide-react";
import {Input} from "@/components/ui/input";

interface BuscaCampeaoProps {
    busca: string
    onBuscaChange: (texto: string) => void
}

function BuscaCampeao({busca, onBuscaChange}: BuscaCampeaoProps) {
    return (
        <div className="relative max-w-md">
            <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-zinc-400"/>
            {/* input controlado: o value vem do estado e o onChange atualiza o estado */}
            <Input
                type="text"
                value={busca}
                onChange={(evento) => onBuscaChange(evento.target.value)}
                placeholder="Buscar campeão..."
                aria-label="Buscar campeão pelo nome"
                className="h-12 rounded-full border-zinc-900/10 bg-white/70 px-11 shadow-sm backdrop-blur-md focus-visible:border-violet-500/60 focus-visible:ring-4 focus-visible:ring-violet-500/15 md:text-sm dark:border-white/10 dark:bg-white/5"
            />
            {/* botão de limpar só aparece quando tem algo digitado */}
            {busca && (
                <button
                    type="button"
                    onClick={() => onBuscaChange("")}
                    aria-label="Limpar busca"
                    className="absolute top-1/2 right-3 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-zinc-400 transition hover:bg-zinc-900/5 hover:text-zinc-700 dark:hover:bg-white/10 dark:hover:text-white"
                >
                    <X className="size-3.5"/>
                </button>
            )}
        </div>
    )
}

export default BuscaCampeao
