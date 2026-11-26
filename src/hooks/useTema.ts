import {useEffect, useState} from "react";

export function useTema() {
    // O script no index.html já aplicou o tema salvo; o hook só lê o estado atual do <html>
    const [escuro, setEscuro] = useState(() => document.documentElement.classList.contains("dark"));

    // Sempre que o tema muda: liga/desliga a classe "dark" no <html> e salva a escolha
    useEffect(() => {
        document.documentElement.classList.toggle("dark", escuro);
        try {
            localStorage.setItem("tema", escuro ? "escuro" : "claro");
        } catch {
            // sem localStorage (ex.: navegação privada) o tema só não fica salvo
        }
    }, [escuro]);

    const alternarTema = () => setEscuro((atual) => !atual);

    return {escuro, alternarTema};
}
