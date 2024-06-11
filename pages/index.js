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
            <h1 className={styles.titulohero}>Encantamos a sua empresa com a direção certa.</h1>
          </div>
        </section>
       
      </main>

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
          width: 100%;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
