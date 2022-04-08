import "./Landingpage.css";

const LandingPage = ({ entrar }) => {
  return (
    <div className="container-principal">
      <div className="container-landingpage">
        <h1>Torneio tribruxo</h1>
        <p>Clique no botão para encontrar os feiticeiros! </p>
        <button onClick={entrar}>Começar</button>
      </div>
    </div>
  );
};

export default LandingPage;
