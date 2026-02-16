import "./Filters.css";

const Filters: React.FC = () => {
    return (
        <div className="filters">
            <input type="date" />
            <input type="date" />

            <select>
                <option>Tipo</option>
            </select>

            <select>
                <option>Status</option>
            </select>

            <input type="text" placeholder="Localidade" />
            <button>Buscar</button>
        </div>
    );
};

export default Filters;
