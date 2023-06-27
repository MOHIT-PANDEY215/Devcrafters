import '@/styles/globals.css';
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthContext';

export default function App({ Component, pageProps, router }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </AuthProvider>
  );
}
