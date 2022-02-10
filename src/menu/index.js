import "./style.css";
export default function Menu() {
  return (
    <>
      <header>
        <nav>
          <a className="logo" href="#">
            <h2>FAKECINELUXE</h2>
          </a>

          <ul className="nav-list">
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Contatos</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
