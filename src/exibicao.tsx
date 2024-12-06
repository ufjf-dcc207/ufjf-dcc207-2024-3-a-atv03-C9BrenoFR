import "./exibicao.css";

interface exibicaoProps{
    inicio: Date,
    fim: Date,
    local: string
}

export default function Exibicao({inicio, fim, local}: exibicaoProps){
    return (
    <div className="exibicao">
        <div className="inicio">Abertura: {inicio.toLocaleString()}</div>
        <div className="fim">Fechamento: {fim.toLocaleString()}</div>
        <div className="local">Cercado: {local}</div>
    </div>
)
}