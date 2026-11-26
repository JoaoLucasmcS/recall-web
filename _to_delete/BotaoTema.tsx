import {Moon, Sun} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useTema} from "@/hooks/useTema";

function BotaoTema() {
    const {tema, alternarTema} = useTema();
    const escuro = tema === "escuro";

    return (
        <Button
            variant="outline"
            size="icon-lg"
            onClick={alternarTema}
            aria-label={escuro ? "Ativar modo claro" : "Ativar modo escuro"}
            className="rounded-full"
        >
            {escuro ? <Sun/> : <Moon/>}
        </Button>
    )
}

export default BotaoTema
