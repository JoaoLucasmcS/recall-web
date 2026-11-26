// Erro com o status HTTP da resposta, para quem chamou decidir o que mostrar (ex.: 404 → "não encontrado")
export class ErroApi extends Error {
    status: number

    constructor(status: number) {
        super(`A API respondeu com status ${status}`)
        this.status = status
    }
}

// Único lugar que sabe o endereço da API e como tratar uma resposta de erro
export async function buscarNaApi<T>(caminho: string): Promise<T> {
    const resposta = await fetch(`${import.meta.env.VITE_API_URL}${caminho}`)
    if (!resposta.ok) throw new ErroApi(resposta.status)
    return resposta.json()
}
