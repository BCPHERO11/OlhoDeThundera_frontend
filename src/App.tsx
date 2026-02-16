import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import SummaryCards from "./components/SummaryCards/SummaryCards";
import OccurrenceTable from "./components/OccurrenceTable/OccurrenceTable";
import { fetchOccurrences } from "./service/api";
import type { Occurrence } from "./types/Occurrence";

const App: React.FC = () => {
    const [occurrences, setOccurrences] = useState<Occurrence[]>([]);
    const [statusFilter, setStatusFilter] = useState("in_progress");
    const [typeFilter, setTypeFilter] = useState("incendio_urbano");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadOccurrences = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await fetchOccurrences({
                status: statusFilter,
                type: typeFilter,
            });
            setOccurrences(data);
        } catch {
            setError("Não foi possível carregar as ocorrências.");
            setOccurrences([]);
        } finally {
            setLoading(false);
        }
    }, [statusFilter, typeFilter]);

    useEffect(() => {
        void loadOccurrences();
    }, [loadOccurrences]);

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Painel de Ocorrências</h2>

                <Filters
                    status={statusFilter}
                    type={typeFilter}
                    onStatusChange={setStatusFilter}
                    onTypeChange={setTypeFilter}
                    onSearch={() => void loadOccurrences()}
                />
                <SummaryCards />

                <div className="main-content">
                    <OccurrenceTable occurrences={occurrences} loading={loading} error={error} />
                </div>
            </div>
        </div>
    );
};

export default App;
