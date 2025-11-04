import { useEffect, useState } from 'react';
export default function Vix(){
  const [v,setV]=useState(null);
  useEffect(()=>{ fetch('/api/vix').then(r=>r.json()).then(setV).catch(e=>setV({error:String(e)})); },[]);
  return (
    <div>
      <h2>India VIX</h2>
      {v?.error && <div style={{color:'#ff7b7b'}}>Error: {String(v.error)}</div>}
      {v?.ok && <div className='card'><div className='small'>VIX</div><div style={{fontWeight:700,fontSize:20}}>{v.value ?? '-'}</div></div>}
    </div>
  )
}
