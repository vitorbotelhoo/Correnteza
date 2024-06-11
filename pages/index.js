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
        
      </header>
      <main>
        <section className={styles.hero}>
          <div className={styles.centeredcontainer}>
            <img className ={styles.logoonhero} src="/Img Logo.png"></img>
            <h1>Encantamos a sua empresa com a direção certa.</h1>
          </div>
        </section>
        <section className={styles.portfoliosec}>
          <div className={styles.centeredcontainer}>
            <h2>Projetos em evidência</h2>
            <div className={styles.cardsContainer}>

              <div className={styles.portfoliocard_hof}>
                  <h3>Teste</h3>
                  <p>Desc</p>
                  <button>Teste</button>
              </div>

              <div className={styles.portfoliocard_hof}>
                  <h3>Teste</h3>
                  <p>Desc</p>
                  <button>Teste</button>
              </div>

              <div className={styles.portfoliocard_hof}>
                  <h3>Teste</h3>
                  <p>Desc</p>
                  <button>Teste</button>
              </div>
              
            </div>
            <div className={styles.rightalign}>
              <button className={styles.customcursor_fogo}>Veja mais projetos aqui <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8.26568L8.58856 8.27491L8.58856 2.4262L1.01476 10L0 8.98524L7.5738 1.41144L1.73432 1.42066V3.44089e-07L10 0V8.26568Z" fill="#B2D9FC"/>
</svg>
</button>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`

        h1, h2, h3, p {
          margin: 0px;
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
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Gabarito;
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
