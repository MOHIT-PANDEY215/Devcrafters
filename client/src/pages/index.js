import Link from 'next/link'
import Main from './components/home/Main'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Devcrafters</title>
    </Head>
    <button><Link href='/course/course'>course</Link></button>
    <Main/>
    </>
  )
}
