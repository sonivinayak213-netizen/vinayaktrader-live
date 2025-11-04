'use client';
import React, {useEffect, useState} from 'react';
export default function OptionsPage(){
  const [symbol,setSymbol] = useState('NIFTY');
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  async function load(sym){
    setLoading(true);
    try{
      const res = await fetch(`/api/optionchain?symbol=${encodeURIComponent(sym)}`);
      const j = await res.json();
      setData(j);
    }catch(e){ setData({error:String(e)}); }
    setLoading(false);
  }
  useEffect(()=>{ load(symbol); },[symbol]);
  return (
    <div>
      <h2>Option Chain</h2>
      <div style={{marginBottom:12}}>
        <select value={symbol} onChange={e=>setSymbol(e.target.value)} style={{padding:8,borderRadius:8}}>
          <option value="NIFTY">NIFTY</option>
          <option value="BANKNIFTY">BANKNIFTY</option>
        </select>
      </div>
      {loading && <div>Loading...</div>}
      {!loading && data?.error && <div style={{color:'#ff7b7b'}}>Error: {String(data.error)}</div>}
      {!loading && data?.ok && (
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
          <div className='card'><div style={{color:'#9fb2c8'}}>Total Call OI</div><div style={{fontWeight:700,fontSize:18}}>{data.summary?.totalCallOI ?? '—'}</div></div>
          <div className='card'><div style={{color:'#9fb2c8'}}>Total Put OI</div><div style={{fontWeight:700,fontSize:18}}>{data.summary?.totalPutOI ?? '—'}</div></div>
          <div className='card'><div style={{color:'#9fb2c8'}}>PCR</div><div style={{fontWeight:700,fontSize:18}}>{data.summary?.pcr ?? '—'}</div></div>
        </div>
      )}
    </div>
  );
}
