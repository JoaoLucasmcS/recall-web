export interface CampeaoResumo {
    id: string
    name: string
    title: string
    tags: string[]
    imagem_url: string
}

export interface Passiva {
    name: string
    description: string
    imagem_url: string
}

export interface Habilidade {
    id: string
    name: string
    description: string
    cooldownBurn: string
    costBurn: string
    imagem_url: string
}

export interface Skin {
    num: number
    name: string
    splash_url: string
}

// "extends" é a herança do TypeScript: CampeaoDetalhe tem tudo do resumo e mais estes campos
export interface CampeaoDetalhe extends CampeaoResumo {
    info: { attack: number, defense: number, magic: number, difficulty: number }
    lore: string
    blurb: string
    allytips: string[]
    enemytips: string[]
    partype: string
    splash_url: string
    passive: Passiva
    spells: Habilidade[]
    skins: Skin[]
}
