import "./Filters.css";

interface Props {
    type: string;
    status: string;
    onTypeChange: (value: string) => void;
    onStatusChange: (value: string) => void;
    onSearch: () => void;
}

const Filters: React.FC<Props> = ({
    type,
    status,
    onTypeChange,
    onStatusChange,
    onSearch,
}) => {
    return (
        <div className="filters">
            <input type="date" disabled />
            <input type="date" disabled />

            <select value={type} onChange={(event) => onTypeChange(event.target.value)}>
                <option value="">Tipo</option>
                <option value="incendio_urbano">Incêndio urbano</option>
                <option value="acidente_transito">Acidente de trânsito</option>
                <option value="resgate">Resgate</option>
            </select>

            <select value={status} onChange={(event) => onStatusChange(event.target.value)}>
                <option value="">Status</option>
                <option value="in_progress">Em andamento</option>
                <option value="completed">Concluída</option>
                <option value="waiting">Aguardando</option>
                <option value="canceled">Cancelada</option>
            </select>

            <input type="text" placeholder="Localidade" disabled />
            <button onClick={onSearch}>Buscar</button>
        </div>
    );
};

export default Filters;
