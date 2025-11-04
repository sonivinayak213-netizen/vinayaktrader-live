import { useEffect, useState } from 'react';
export default function IPO(){
  const [d,setD]=useState(null);
  useEffect(()=>{ fetch('/api/ipo').then(r=>r.json()).then(setD).catch(e=>setD({error:String(e)})); },[]);
  return (
    <div>
      <h2>IPO & GMP</h2>
      {d?.error && <div style={{color:'#ff7b7b'}}>Error: {String(d.error)}</div>}
      {d?.ok && Array.isArray(d.rows) && (
        <div className='card'>
          <table className='table'>
            <thead><tr><th>Name</th><th>GMP</th><th>Other</th></tr></thead>
            <tbody>
              {d.rows.slice(0,20).map((r,i)=>(<tr key={i}><td>{r.name}</td><td>{r.gmp}</td><td>{r.other}</td></tr>))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
