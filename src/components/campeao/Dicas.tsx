import type {CampeaoDetalhe} from "@/types/campeao";

function Dicas({campeao}: { campeao: CampeaoDetalhe }) {
    const grupos = [
        {titulo: `Jogando com ${campeao.name}`, dicas: campeao.allytips, cor: "border-emerald-500"},
        {titulo: `Jogando contra ${campeao.name}`, dicas: campeao.enemytips, cor: "border-rose-500"},
    ].filter((grupo) => grupo.dicas.length > 0)

    return (
        <div className="grid gap-6 md:grid-cols-2">
            {grupos.map(({titulo, dicas, cor}) => (
                <div key={titulo} className={`rounded-2xl border-l-4 ${cor} bg-white/60 p-6 backdrop-blur-md dark:bg-white/5`}>
                    <h3 className="mb-3 font-semibold">{titulo}</h3>
                    <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                        {dicas.map((dica) => <li key={dica}>{dica}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Dicas
