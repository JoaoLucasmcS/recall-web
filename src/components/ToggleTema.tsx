import {Moon, Sun} from "lucide-react";
import {useTema} from "@/hooks/useTema";

function ToggleTema() {
    const {escuro, alternarTema} = useTema();

    return (
        <button
            type="button"
            role="switch"
            aria-checked={escuro}
            aria-label="Alternar modo escuro"
            onClick={alternarTema}
            className="relative h-8 w-14 cursor-pointer rounded-full bg-zinc-200 ring-1 ring-zinc-900/10 transition-colors duration-300 dark:bg-violet-950 dark:ring-violet-400/30"
        >
            {/* a "bolinha" desliza para a direita no modo escuro */}
            <span className="absolute top-1 left-1 flex size-6 items-center justify-center rounded-full bg-white text-amber-500 shadow-md transition-transform duration-300 dark:translate-x-6 dark:bg-violet-500 dark:text-white">
                {escuro ? <Moon className="size-3.5"/> : <Sun className="size-3.5"/>}
            </span>
        </button>
    )
}

export default ToggleTema
