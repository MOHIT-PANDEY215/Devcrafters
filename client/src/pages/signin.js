import Head from 'next/head'
import SignIn from './components/login/SignIn'

export default function signin() {
  return (
    <>
    <Head>
      <title>Login</title>
    </Head>
    <SignIn/>
    </>
  )
}