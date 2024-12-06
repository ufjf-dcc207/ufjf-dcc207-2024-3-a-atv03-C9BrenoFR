import "./exibicao.css";

interface exibicaoProps{
    inicio: Date,
    fim: Date,
    local: string
    children: React.ReactNode
}

export default function Exibicao({inicio, fim, local, children}: exibicaoProps){
    return (
    <div className="exibicao">
        <div className="inicio">Abertura: {inicio.toLocaleString()}</div>
        <div className="fim">Fechamento: {fim.toLocaleString()}</div>
        <div className="local">Cercado: {local}</div>
        <div className="animais">
            {children}
        </div>
    </div>
)
}