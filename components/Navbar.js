import Link from 'next/link';
export default function Navbar(){ return (
  <header className="nav container">
    <div className="brand">
      <div style={{width:40,height:40,background:'#00bcd4',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',color:'#061022',fontWeight:800}}>VT</div>
      <div><div style={{fontWeight:700}}>VinayakTrader</div><div className='small'>Live NSE Dashboard</div></div>
    </div>
    <nav style={{display:'flex',gap:12}}>
      <Link href="/"><a className='small'>Overview</a></Link>
      <Link href="/options"><a className='small'>Options</a></Link>
      <Link href="/vix"><a className='small'>VIX</a></Link>
      <Link href="/ipo"><a className='small'>IPO</a></Link>
    </nav>
  </header>
)}