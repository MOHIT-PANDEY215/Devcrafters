import Head from 'next/head'
import SignIn from './components/login/SignIn'

export default function parent() {
  return (
    <>
    <Head>
      <title>Login</title>
    </Head>
    <SignIn/>
    </>
  )
}