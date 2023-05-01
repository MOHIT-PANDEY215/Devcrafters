import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from './components/home/Main'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Devcrafters</title>
    </Head>
    <Main/>
    </>
  )
}