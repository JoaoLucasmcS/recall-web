import {Crosshair, Heart, Shield, Sparkles, Sword, Swords} from "lucide-react";
import type {LucideIcon} from "lucide-react";

// As tags vêm do Data Dragon em inglês; aqui fica o nome em português e o ícone de cada uma
export const CLASSES: { tag: string, nome: string, icone: LucideIcon }[] = [
    {tag: "Assassin", nome: "Assassino", icone: Swords},
    {tag: "Fighter", nome: "Lutador", icone: Sword},
    {tag: "Mage", nome: "Mago", icone: Sparkles},
    {tag: "Marksman", nome: "Atirador", icone: Crosshair},
    {tag: "Support", nome: "Suporte", icone: Heart},
    {tag: "Tank", nome: "Tanque", icone: Shield},
]

export function buscarClasse(tag: string) {
    return CLASSES.find((classe) => classe.tag === tag)
}
