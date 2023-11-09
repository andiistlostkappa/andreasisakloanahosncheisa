import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Andreas is a kloana hosn scheißa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Andreas is a kloana hosn scheißa" />
        <p className="description">
         
        </p>
      </main>

      <Footer />
    </div>
  )
}
