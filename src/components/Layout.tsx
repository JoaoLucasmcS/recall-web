import {Outlet} from "react-router";
import Navbar from "@/components/Navbar";

// Fundo + barra de navegação comuns a todas as páginas; o <Outlet/> é onde a página atual aparece
function Layout() {
    return (
        <div className="relative min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-white">
            {/* manchas de luz desfocadas no fundo */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-violet-400/25 blur-3xl dark:bg-violet-600/25"/>
                <div className="absolute top-1/3 -right-40 size-[400px] rounded-full bg-fuchsia-400/15 blur-3xl dark:bg-fuchsia-600/10"/>
            </div>

            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Layout
