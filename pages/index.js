import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}> 
      <Head>
        <title>Correnteza Estúdio</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>
      <header>
            <img>Logo</img>
            <nav>
                <menu>Quem somos</menu>
                <menu>Projetos</menu>
                <menu>Instagram</menu>
            </nav>
      </header>
      <main>
        <section>
            <img>Logo Maior</img>
            <h1>Encantamos a sua empresa com a direção certa.</h1>
        </section>
        <section>
            <h2>Projetos em evidência</h2>
            <ul>
                <li>
                    <h3>Redes Sociais do Hospital de Olhos de Florianópolis.</h3>
                    <p>Redes Sociais</p>
                </li>
                <li>
                    <h3>Projeto de Logo e Identidade para a Tic Sales.</h3>
                    <p>Branding</p>
                </li>
                <li>
                    <h3>Projeto de site da Ampe Metropolitana.</h3>
                    <p>Site em Wordpress</p>
                </li>
            </ul>
            <button>Veja mais projetos aqui</button>
        </section>
        <section>
            <h3>É facil pra você.</h3>
            <h2>Você pede, e a Correnteza faz.</h2>
            <ul>
                <li>
                    <img>Ícone do Card</img>
                    <h3>Design de qualidade à qualquer momento.</h3>
                    <p>Tenha um setor de design sem ter estresse interno, problemas empregatícios e pagando menos do que um salário de CLT. É a sua chance de construir um design sustentável para a sua empresa.</p>
                    <a>É fácil pra você.</a>
                </li>
                <li>
                    <img>Ícone do Card</img>
                    <h3>Chega de orçamentos picados e caros.</h3>
                    <p>Atendemos uma gama de demandas variadas à depender do seu plano. Sua solução de design pode estar à uma mensalidade de alcance.</p>
                    <a>É fácil pra você.</a>
                </li>
                <li>
                    <img>Ícone do Card</img>
                    <h3>Combine os melhores prazos para suas entregas.</h3>
                    <p>Negociamos prazos para entregas complexas com rapidez elevada. Pode ser a sua chance de acalmar a cabeça sobre aquela apresentação de última hora.</p>
                    <a>É fácil pra você.</a>
                </li>
            </ul>
        </section>
        <section>
            <img>Logo</img>
            <h3>Escolha um plano, agende uma reunião e estamos prontos pra navegar!</h3>
            <p>Facilitamos a sua vida com um processo de adesão simplificado, só precisamos de alguns materiais e de um briefing para começar.</p>
        </section>
        <section>
            <img>Logo de Cliente</img>
            <img>Logo de Cliente</img>
            <img>Logo de Cliente</img>
            <img>Logo de Cliente</img>
            <img>Logo de Cliente</img>
            <img>Logo de Cliente</img>
            <img>Logo de Cliente</img>
            <img>Logo de Cliente</img>
        </section>
        <section>
            <h3>E a melhor parte...</h3>
            <h2>Confira os nossos planos:</h2>
            <ul>
                <li>
                    <img>Ícone do Card</img>
                    <h3>Consultoria em Gotas</h3>
                    <p>Tem dúvidas no seu time, ou tem um problema com um projeto de design. Me deixe descomplicar isso para você.</p>
                    <p>Não inclui mão de obra, apenas análise e feedbacks elaborados de acordo com a demanda.</p>
                    <p>R$800,00</p>
                    <button>Eu quero!</button>
                </li>
                <li>
                    <p>Recomendado</p>
                    <img>Ícone do Card</img>
                    <h3>Chuva de Design</h3>
                    <p>Resolva problemas de design. Esse plano é perfeito para quem quer ter entrega na mão.</p>
                    <p>Inclui consultoria e entregáveis com prazos curtos e demandas de variados tipos.</p>
                    <p>R$2.000,00</p>
                    <button>Eu quero!</button>
                </li>
                <li>
                    <img>Ícone do Card</img>
                    <h3>Correnteza</h3>
                    <p>Tem demandas urgentes? Preciso de uma entrega com mais qualidade para sua empresa? Esse é o plano perfeito.</p>
                    <p>Tudo que você precisar de design com até 1 dia útil de prazo.</p>
                    <p>R$4.000,00</p>
                    <button>Eu quero!</button>
                </li>
            </ul>
        </section>
    </main>
    <footer>
            <img>Logo Horizontal Completa</img>
            <nav>
                <menu>Quem somos?</menu>
                <menu>Dúvidas</menu>
                <menu>Projetos</menu>
                <menu>vitor@correnteza.com</menu>
                <menu>(48) 9 8803-2352</menu>
                <menu>Instagram</menu>
            </nav>
        </footer>

      <style jsx>{`

        h1, h2, h3, p {
          margin: 0px;
      }
          
        @media (max-width: 600px) {
          h1 { font-size: 32px;}
          }
        }

        section {
          padding: 24px;
        }

        h1 {
          font-size: 64px;
          font-style: normal;
          font-weight: 700;
          line-height: 100%;
          text-align: center;
        }

        h2 {
          font-size: 36px;
          font-style: normal;
          font-weight: 700;
          line-height: 110%;
          text-align: center;
        }

        button {
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 90%;
          text-align: center;
          padding: 8px 12px;
          border-radius: 12px;
          font-family: Gabarito;
          color: #B2D9FC;
          background-color: #08152C;
          border: 0px solid;
          transition: transform .2s;
          }

        button:hover {
        transform: scale(1.05);
        }
        
        main {
          color: #fff;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Gabarito", sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
