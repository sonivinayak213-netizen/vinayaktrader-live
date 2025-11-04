'use client';
import React, {useEffect, useState} from 'react';
export default function VixPage(){
  const [data,setData] = useState(null);
  useEffect(()=>{
    fetch('/api/vix').then(r=>r.json()).then(setData).catch(e=>setData({error:String(e)}));
  },[]);
  return (
    <div>
      <h2>India VIX</h2>
      {data?.error && <div style={{color:'#ff8a8a'}}>Error: {String(data.error)}</div>}
      {!data?.error && <div className='card'><div style={{color:'#9fb2c8'}}>VIX Value</div><div style={{fontWeight:700,fontSize:18}}>{data?.value ?? '—'}</div></div>}
    </div>
  );
}
