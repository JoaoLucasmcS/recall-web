import {ArrowLeft} from "lucide-react";
import {Link} from "react-router";

// Arte oficial do Amumu, a Múmia Triste, servida pela CDN da Riot (mesma origem das outras imagens do Recall)
const AMUMU = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Amumu_0.jpg"

interface NaoEncontradoProps {
    titulo?: string
    mensagem?: string
}

function NaoEncontrado({
    titulo = "Página não encontrada",
    mensagem = "O Amumu procurou por toda Runeterra e não achou essa página. Ele está tentando não chorar.",
}: NaoEncontradoProps) {
    return (
        <main className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:gap-16 md:py-24">
            <div className="relative shrink-0">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-violet-500/30 blur-3xl"/>
                <img
                    src={AMUMU}
                    alt="Amumu, a Múmia Triste"
                    className="w-56 -rotate-3 rounded-2xl ring-1 ring-zinc-900/10 shadow-2xl transition duration-500 hover:rotate-0 md:w-64 dark:ring-white/10"
                />
                <span className="absolute -right-4 -bottom-4 rotate-6 rounded-full bg-violet-600 px-4 py-1.5 text-sm font-bold text-white shadow-lg shadow-violet-500/40">
                    404
                </span>
            </div>

            <div className="text-center md:text-left">
                <p className="text-sm font-medium tracking-[0.3em] text-violet-600 uppercase dark:text-violet-400">
                    Erro 404
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{titulo}</h1>
                <p className="mt-4 max-w-md text-lg text-zinc-600 dark:text-zinc-400">{mensagem}</p>
                <Link
                    to="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-500"
                >
                    <ArrowLeft className="size-4"/>
                    Voltar para a biblioteca
                </Link>
            </div>
        </main>
    )
}

export default NaoEncontrado
