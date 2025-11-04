import '../styles/globals.css';
import Navbar from '../components/Navbar';
export default function App({ Component, pageProps }){
  return (
    <div>
      <Navbar />
      <main className="container"><Component {...pageProps} /></main>
      <div className="container footer">Built with VinayakTrader starter — for reliable trading use paid market data API.</div>
    </div>
  )
}
