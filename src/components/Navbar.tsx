import {Link} from "react-router";
import Logo from "@/components/Logo";
import ToggleTema from "@/components/ToggleTema";
import {usePatch} from "@/hooks/usePatch";

function Navbar() {
    const versao = usePatch()

    return (
        <nav className="sticky top-0 z-20 border-b border-zinc-900/5 bg-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/50">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link to="/" className="flex items-center gap-2.5">
                    <Logo className="size-8 drop-shadow-[0_4px_12px_rgba(139,92,246,0.45)]"/>
                    <span className="font-semibold tracking-tight">Recall</span>
                </Link>

                <div className="flex items-center gap-3">
                    {versao && (
                        // o Data Dragon usa "16.23.1"; os jogadores chamam de "Patch 16.23"
                        <span className="hidden items-center gap-1.5 rounded-full border border-zinc-900/10 px-3 py-1 text-xs font-medium text-zinc-600 sm:inline-flex dark:border-white/10 dark:text-zinc-300">
                            <span className="size-1.5 rounded-full bg-emerald-500"/>
                            Patch {versao.split(".").slice(0, 2).join(".")}
                        </span>
                    )}
                    <ToggleTema/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
