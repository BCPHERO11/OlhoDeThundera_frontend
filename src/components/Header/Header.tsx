import "./Header.css";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div>
                <h1>SISTEMA DE OCORRÊNCIAS</h1>
                <span>Corpo de Bombeiros Militar</span>
            </div>

            <div>
                <span>Processo Seletivo CBMSE2026</span>
                <button>Sair</button>
            </div>
        </header>
    );
};

export default Header;
