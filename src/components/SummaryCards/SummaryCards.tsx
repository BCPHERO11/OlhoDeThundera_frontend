import "./SummaryCards.css";

interface Props {
    active?: number;
    completed?: number;
    ongoing?: number;
    waiting?: number;
}

const SummaryCards: React.FC<Props> = ({
                                           active = 12,
                                           completed = 34,
                                           ongoing = 8,
                                           waiting = 5,
                                       }) => {
    return (
        <div className="cards">
            <div className="card red">Ativas: {active}</div>
            <div className="card green">Concluídas: {completed}</div>
            <div className="card yellow">Em andamento: {ongoing}</div>
            <div className="card gray">Aguardando: {waiting}</div>
        </div>
    );
};

export default SummaryCards;
