// As descrições do Data Dragon vêm com marcações HTML (<br>, <magicDamage>...).
// Trocamos <br> por quebra de linha e removemos o resto, para exibir como texto simples.
export function limparDescricao(texto: string): string {
    return texto
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<[^>]+>/g, "")
        .trim()
}
