import {Link} from "react-router";
import ToggleTema from "@/components/ToggleTema";

function Navbar() {
    return (
        <nav className="sticky top-0 z-20 border-b border-zinc-900/5 bg-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/50">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link to="/" className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-violet-500 to-fuchsia-500 text-sm font-bold text-white shadow-lg shadow-violet-500/30">
                        R
                    </div>
                    <span className="font-semibold tracking-tight">Recall</span>
                </Link>
                <ToggleTema/>
            </div>
        </nav>
    )
}

export default Navbar
