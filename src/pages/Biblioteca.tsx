import {useState} from "react";
import AvisoServidorAcordando from "@/components/AvisoServidorAcordando";
import BuscaCampeao from "@/components/BuscaCampeao";
import CardCampeao from "@/components/CardCampeao";
import FiltroClasse from "@/components/FiltroClasse";
import {useCampeoes} from "@/hooks/useCampeoes";

function Biblioteca() {
  const {campeoes, status} = useCampeoes()
  const carregando = status === "carregando"

  const [busca, setBusca] = useState("")
  const [classes, setClasses] = useState<string[]>([])

  // fica só com os campeões que batem com a busca E com todas as classes escolhidas
  const campeoesFiltrados = campeoes.filter((campeao) => {
    const bateNome = campeao.name.toLowerCase().includes(busca.trim().toLowerCase())
    const bateClasse = classes.length === 0 || classes.every((classe) => campeao.tags.includes(classe))
    return bateNome && bateClasse
  })

  return (
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

        <div className="mb-8 flex flex-col gap-4">
          <BuscaCampeao busca={busca} onBuscaChange={setBusca}/>
          <FiltroClasse classes={classes} onClassesChange={setClasses}/>
        </div>

        {carregando && <AvisoServidorAcordando/>}

        {status === "erro" && (
            <p className="py-20 text-center text-zinc-500">
              Não foi possível carregar os campeões agora. Tente novamente em instantes.
            </p>
        )}

        {status === "ok" && campeoesFiltrados.length === 0 && (
            <p className="py-20 text-center text-zinc-500">
              Nenhum campeão encontrado com esses filtros.
            </p>
        )}

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {carregando
              // enquanto os dados não chegam, "esqueletos" pulsam no lugar dos cards
              ? Array.from({length: 10}, (_, indice) => (
                  <div key={indice} className="aspect-308/560 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800/60"/>
              ))
              : campeoesFiltrados.map((campeao) => (
                  <CardCampeao key={campeao.id} campeao={campeao}/>
              ))}
        </div>
      </main>
  )
}

export default Biblioteca
