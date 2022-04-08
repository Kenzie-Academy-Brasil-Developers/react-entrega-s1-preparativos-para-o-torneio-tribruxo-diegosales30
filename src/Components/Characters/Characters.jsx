import "./Characters.css";

const Characters = ({
  renderCharacter,
  character1,
  character2,
  character3,
}) => {
  const output = [...character1, ...character2, ...character3];

  console.log(output);
  return (
    <div>
      <ul className="container-character-list">
        {output.map((current, index) => (
          <li key={index} className="character-list">
            <figure>
              <img
                className="img-character"
                src={
                  current.image === ""
                    ? "https://geekfanaticos.fbitsstatic.net/img/p/funko-pop-harry-potter-122-harry-potter-71768/258254-1.jpg?w=540&h=540&v=no-change&qs=ignore"
                    : current.image
                }
                alt={current.name}
              />
            </figure>
            <p className="name-character">{current.name}</p>
            <p className="home-character">
              {current.house === "" ? "desconhecido" : current.house}
            </p>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={renderCharacter} className="btn-character">
          Tentar novamente
        </button>
      </div>
    </div>
  );
};
export default Characters;
