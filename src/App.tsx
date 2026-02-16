import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import SummaryCards from "./components/SummaryCards/SummaryCards";
import OccurrenceTable from "./components/OccurrenceTable/OccurrenceTable";

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <h2>Painel de Ocorrências</h2>

                <Filters />
                <SummaryCards />

                <div className="main-content">
                    <OccurrenceTable />
                </div>
            </div>
        </div>
    );
};

export default App;
