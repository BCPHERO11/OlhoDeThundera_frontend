import "./OccurrenceTable.css";
import type { Occurrence } from "../../types/Occurrence";

interface Props {
    occurrences: Occurrence[];
    loading?: boolean;
    error?: string | null;
}

const formatStatus = (status: string) => status.replaceAll("_", " ");

const OccurrenceTable: React.FC<Props> = ({ occurrences, loading = false, error = null }) => {
    if (loading) {
        return (
            <div className="table-container">
                <h3>Lista de Ocorrências</h3>
                <p>Carregando ocorrências...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="table-container">
                <h3>Lista de Ocorrências</h3>
                <p>{error}</p>
            </div>
        );
    }

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
                    {occurrences.length === 0 ? (
                        <tr>
                            <td colSpan={6}>Nenhuma ocorrência encontrada para os filtros selecionados.</td>
                        </tr>
                    ) : (
                        occurrences.map((occurrence) => (
                            <tr key={occurrence.id}>
                                <td>{occurrence.id}</td>
                                <td>{occurrence.type}</td>
                                <td>{occurrence.location}</td>
                                <td>
                                    <span className={`status-badge status-${occurrence.status}`}>
                                        {formatStatus(occurrence.status)}
                                    </span>
                                </td>
                                <td>{occurrence.team ?? "-"}</td>
                                <td>
                                    <button>Detalhes</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default OccurrenceTable;
