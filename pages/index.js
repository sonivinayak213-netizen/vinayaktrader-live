import Link from 'next/link';
export default function Home(){
  return (
    <div>
      <h1 style={{fontSize:28}}>📊 VinayakTrader — Overview</h1>
      <p className="small">Quick links to live modules</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12,marginTop:12}}>
        <div className="card"><div className="small">Options</div><div style={{fontWeight:700}}>Real-time Option Chain</div><div style={{marginTop:8}}><Link href='/options'><a>Open</a></Link></div></div>
        <div className="card"><div className="small">VIX</div><div style={{fontWeight:700}}>India VIX Live</div><div style={{marginTop:8}}><Link href='/vix'><a>Open</a></Link></div></div>
        <div className="card"><div className="small">IPO</div><div style={{fontWeight:700}}>GMP & IPOs</div><div style={{marginTop:8}}><Link href='/ipo'><a>Open</a></Link></div></div>
      </div>
    </div>
  )
}
