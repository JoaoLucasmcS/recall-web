import CardCampeao from "@/components/CardCampeao";
import Navbar from "@/components/Navbar";
import {useCampeoes} from "@/hooks/useCampeoes";

function App() {
  const campeoes = useCampeoes()
  const carregando = campeoes.length === 0

  return (
      <div className="relative min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-white">
        {/* manchas de luz desfocadas no fundo */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-violet-400/25 blur-3xl dark:bg-violet-600/25"/>
          <div className="absolute top-1/3 -right-40 size-[400px] rounded-full bg-fuchsia-400/15 blur-3xl dark:bg-fuchsia-600/10"/>
        </div>

        <Navbar/>

        <main className="relative mx-auto max-w-7xl px-6 pb-20">
          <header className="pt-16 pb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-300">
              <span className="size-1.5 rounded-full bg-violet-500"/>
              League of Legends
            </span>
            <h1 className="mt-5 bg-linear-to-r from-zinc-900 via-violet-700 to-fuchsia-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl dark:from-white dark:via-violet-200 dark:to-fuchsia-300">
              Biblioteca de campeões
            </h1>
            <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
              Explore os {carregando ? "" : `${campeoes.length} `}campeões de Runeterra: história, habilidades e dicas.
            </p>
          </header>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {carregando
                // enquanto os dados não chegam, "esqueletos" pulsam no lugar dos cards
                ? Array.from({length: 10}, (_, indice) => (
                    <div key={indice} className="aspect-308/560 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800/60"/>
                ))
                : campeoes.map((campeao) => (
                    <CardCampeao key={campeao.id} campeao={campeao}/>
                ))}
          </div>
        </main>
      </div>
  )
}

export default App
