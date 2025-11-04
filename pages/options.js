import { useEffect, useState } from 'react';
export default function OptionsPage(){
  const [symbol,setSymbol] = useState('NIFTY');
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  useEffect(()=>{ load(symbol); },[symbol]);
  async function load(sym){
    setLoading(true);
    try{
      const res = await fetch(`/api/optionchain?symbol=${encodeURIComponent(sym)}`);
      const j = await res.json();
      setData(j);
    }catch(e){ setData({ error: String(e) }); }
    setLoading(false);
  }
  return (
    <div>
      <h2>Option Chain (summary)</h2>
      <div style={{marginTop:8,marginBottom:8}}>
        <label>Symbol: </label>
        <select value={symbol} onChange={e=>setSymbol(e.target.value)} style={{marginLeft:8}}>
          <option>NIFTY</option>
          <option>BANKNIFTY</option>
        </select>
        <button style={{marginLeft:8}} onClick={()=>load(symbol)}>Refresh</button>
      </div>
      {loading && <div>Loading...</div>}
      {data?.error && <div style={{color:'#ff7b7b'}}>Error: {String(data.error)}</div>}
      {data?.ok && (
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
          <div className='card'><div className='small'>Total Call OI</div><div style={{fontWeight:700}}>{Number(data.totalCallOI).toLocaleString()}</div></div>
          <div className='card'><div className='small'>Total Put OI</div><div style={{fontWeight:700}}>{Number(data.totalPutOI).toLocaleString()}</div></div>
          <div className='card'><div className='small'>PCR</div><div style={{fontWeight:700}}>{data.pcr ?? '-'}</div></div>
        </div>
      )}
    </div>
  )
}
