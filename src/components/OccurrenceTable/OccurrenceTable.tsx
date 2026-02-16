import "./OccurrenceTable.css";
import {Occurrence} from "../../types/Occurrence";

const mockData: Occurrence[] = [
    {
        id: 1324,
        type: "Incêndio Residencial",
        location: "Aracaju",
        status: "EM_ANDAMENTO",
        team: "Equipe Alfa",
    },
    {
        id: 1321,
        type: "Acidente de Trânsito",
        location: "Lagarto",
        status: "CONCLUIDA",
        team: "Equipe Bravo",
    },
];

const OccurrenceTable: React.FC = () => {
    return (
        <div className="table-container">
            <h3>Lista de Ocorrências</h3>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Localização</th>
                    <th>Status</th>
                    <th>Equipe</th>
                    <th>Ações</th>
                </tr>
                </thead>

                <tbody>
                {mockData.map((occurrence) => (
                    <tr key={occurrence.id}>
                        <td>{occurrence.id}</td>
                        <td>{occurrence.type}</td>
                        <td>{occurrence.location}</td>
                        <td>
                            <span className={`status-badge status-${occurrence.status}`}>
                                {occurrence.status.replace("_", " ")}
                            </span>
                        </td>
                        <td>{occurrence.team}</td>
                        <td>
                            <button>Detalhes</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
};

export default OccurrenceTable;