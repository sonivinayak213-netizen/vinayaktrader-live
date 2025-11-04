import Link from 'next/link';
export default function Navbar(){ 
  return (
    <nav style={{background:'#0b1220',padding:'12px 20px',borderBottom:'1px solid rgba(255,255,255,0.03)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',maxWidth:1100,margin:'0 auto'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:40,height:40,background:'#00bcd4',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',color:'#061022',fontWeight:700}}>VT</div>
          <div><div style={{fontWeight:700}}>VinayakTrader</div><div style={{fontSize:12,color:'#9fb2c8'}}>Live NSE Dashboard</div></div>
        </div>
        <div style={{display:'flex',gap:12}}>
          <Link href="/"><a style={{color:'#cfeef7'}}>Overview</a></Link>
          <Link href="/options"><a style={{color:'#cfeef7'}}>Options</a></Link>
          <Link href="/vix"><a style={{color:'#cfeef7'}}>VIX</a></Link>
          <Link href="/ipo"><a style={{color:'#cfeef7'}}>IPO</a></Link>
        </div>
      </div>
    </nav>
  );
}
