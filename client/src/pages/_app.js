import '@/styles/globals.css'
import Layout from './components/Layout'
import { AnimatePresence, LazyMotion, domAnimation,motion } from 'framer-motion'

export default function App({ Component, pageProps,router }) {
  return <Layout>
    <LazyMotion features={domAnimation}>
    <AnimatePresence 
      mode="wait" 
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
           
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Component {...pageProps} key={router.asPath} />
          </motion.div>
      
    </AnimatePresence>
    </LazyMotion>
  </Layout>
}
