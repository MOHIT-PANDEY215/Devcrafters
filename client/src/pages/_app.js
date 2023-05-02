import '@/styles/globals.css'
import Layout from './components/Layout'
import { AnimatePresence, LazyMotion, domAnimation,motion } from 'framer-motion'

export default function App({ Component, pageProps,router }) {
  return <Layout>
            <Component {...pageProps} key={router.asPath} /> 
          </Layout>
}
