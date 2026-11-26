import {ArrowUpRight} from "lucide-react";
import {Link} from "react-router";
import type {CampeaoResumo} from "@/types/campeao";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

function CardCampeao({campeao}: {campeao: CampeaoResumo}) {
    return (
        // o Link troca de página sem recarregar o site inteiro
        <Link to={`/campeao/${campeao.id}`} className="rounded-xl focus-visible:outline-2 focus-visible:outline-violet-500">
        <Card className="group relative cursor-pointer gap-0 bg-zinc-200 py-0 ring-zinc-900/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-violet-500/30 hover:ring-2 hover:ring-violet-500/70 dark:bg-zinc-900 dark:ring-white/10">
            <CardContent className="px-0">
                {/* overflow-hidden "corta" a imagem quando ela cresce */}
                <div className="overflow-hidden">
                    {/* scale-[1.08] esconde a borda escura que a arte de loading já traz */}
                    <img
                        src={campeao.imagem_url}
                        alt={campeao.name}
                        loading="lazy"
                        className="aspect-308/560 w-full scale-[1.08] object-cover transition duration-500 group-hover:scale-[1.16]"
                    />
                </div>
            </CardContent>

            {/* ícone que aparece no hover, indicando que o card é clicável */}
            <div className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                <ArrowUpRight className="size-4"/>
            </div>

            {/* degradê escuro embaixo, para o texto ficar legível em qualquer imagem */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black via-black/60 to-transparent"/>

            <CardHeader className="absolute inset-x-0 bottom-0 pb-4">
                <CardTitle className="text-lg font-semibold text-white">{campeao.name}</CardTitle>
                <CardDescription className="text-violet-200/90">{campeao.title}</CardDescription>
            </CardHeader>
        </Card>
        </Link>
    )
}

export default CardCampeao
