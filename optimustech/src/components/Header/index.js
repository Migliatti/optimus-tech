import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/img/logo.svg" alt="Logo da Optimus Tech" />
        <h1>Optimus Tech</h1>
      </div>
      <nav>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Produtos</button>
          </li>
          <li>
            <button>Recursos</button>
          </li>
          <li>
            <button>Sobre nós</button>
          </li>
        </ul>
      </nav>
      <div className="create-account">
        <button className="login">Entrar</button>
        <button className="sing">Cadastrar</button>
      </div>
    </header>
  );
};

export default Header;
