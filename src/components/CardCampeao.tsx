import type {CampeaoResumo} from "@/types/campeao";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";

function CardCampeao({campeao}: {campeao: CampeaoResumo}) {
    return (
        <Card>
            <CardContent>
                <img src={campeao.imagem_url} alt={campeao.name} className="w-full rounded-md"/>
            </CardContent>
            <CardHeader>
                <CardTitle>{campeao.name}</CardTitle>
                <CardDescription>{campeao.title}</CardDescription>
            </CardHeader>
        </Card>
    )
}

export default CardCampeao