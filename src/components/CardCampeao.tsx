import type {CampeaoResumo} from "../types/campeao.ts";

function CardCampeao({campeao}: {campeao: CampeaoResumo}) {
    return (
        <div>
            <img src={campeao.imagem_url} alt={campeao.name}/>
            <h2>{campeao.name}</h2>
            <p>{campeao.title}</p>
        </div>
    )

}

export default CardCampeao