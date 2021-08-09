import Head from 'next/head';
import styles from './styles.module.scss';

export default function Post () {
  return(
    <>
      <Head>
        <title>Post | ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>03 de Agosto de 2021</time>
            <strong>Novas features do JavaScript</strong>
            <p>Foi incluído na String o método matchAll(), que retorna um iterator em cada valor que
              fez match, ou seja, cada valor que foi encontrado através da regex.</p>
          </a>

          <a href="#">
            <time>03 de Agosto de 2021</time>
            <strong>Novas features do JavaScript</strong>
            <p>Foi incluído na String o método matchAll(), que retorna um iterator em cada valor que
              fez match, ou seja, cada valor que foi encontrado através da regex.</p>
          </a>

          <a href="#">
            <time>03 de Agosto de 2021</time>
            <strong>Novas features do JavaScript</strong>
            <p>Foi incluído na String o método matchAll(), que retorna um iterator em cada valor que
              fez match, ou seja, cada valor que foi encontrado através da regex.</p>
          </a>
        </div>
      </main>

    </>
  );
}
