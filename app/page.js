'use client';
import Link from 'next/link';
export default function Page(){ 
  return (
    <div>
      <h1 style={{fontSize:28,marginBottom:8}}>📊 VinayakTrader — Live Dashboard</h1>
      <p style={{color:'#9fb2c8'}}>Overview — Use the nav to open Options / VIX / IPO</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12,marginTop:16}}>
        <div className="card"><div style={{fontSize:12,color:'#9fb2c8'}}>NIFTY (live)</div><div style={{fontSize:18,fontWeight:700}}>—</div></div>
        <div className="card"><div style={{fontSize:12,color:'#9fb2c8'}}>BANKNIFTY (live)</div><div style={{fontSize:18,fontWeight:700}}>—</div></div>
        <div className="card"><div style={{fontSize:12,color:'#9fb2c8'}}>VIX</div><div style={{fontSize:18,fontWeight:700}}>—</div></div>
      </div>
    </div>
  );
}
