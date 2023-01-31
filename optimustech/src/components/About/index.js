import Stats from "../Stats";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="main">
        <h3>Sobre nós</h3>
        <h2>Por que somos diferentes?</h2>
        <p>
          Nós focamos nos detalhes de tudo que fazemos. Tudo para ajudar as
          empresas de todo o mundo a se concentrarem naquilo que é realmente
          importante para elas.
        </p>
      </div>
      <div className="stats">
        <Stats
          number="400+"
          title="Projetos Concluídos"
          p="Nós ajudamos a construir mais de 400 projetos incríveis."
        />
        <Stats
          number="100+"
          title="Colaboradores"
          p="Temos mais de 100 colaboradores no nosso time que se preocupam com nossos clientes."
        />
        <Stats
          number="20k"
          title="Downloads"
          p="Nossos projetos que estão disponíveis em lojas já foram baixados mais de 20.000 vezes."
        />
        <Stats
          number="500+"
          title="Reviews 5 estrelas"
          p="Estamos orgulhosos de contar com mais de 500 reviews 5 estrelas em nossos produtos."
        />
      </div>
    </div>
  );
};

export default About;
