import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import WindowIcon from '../scripts/WindowIcon'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paimon.is-a.dev</title>
        <meta name="description" content="An Unofficial fan made Genshin REST API." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Paimon.is-a.dev
        </h1>

        <p className={styles.description}>
          An Unofficial fan made Genshin REST API! Features include character data, weapons, and more!
          <br></br>
          <a 
            href="https://github.com/kokonut27/paimon.is-a.dev/"
          >
            Visit on Github <WindowIcon />
          </a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/kokonut27"
        >
          Built with ❤ by kokonut. 
        </a>
      </footer>
    </div>
  )
}
