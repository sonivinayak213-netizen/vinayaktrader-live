'use client';
import React,{useEffect,useState} from 'react';
export default function IpoPage(){
  const [data,setData]=useState(null);
  useEffect(()=>{
    fetch('/api/ipo').then(r=>r.json()).then(setData).catch(e=>setData({error:String(e)}));
  },[]);
  return (
    <div>
      <h2>IPO GMP</h2>
      {data?.error && <div style={{color:'#ff8a8a'}}>Error: {String(data.error)}</div>}
      {!data?.error && Array.isArray(data?.rows) && (
        <div className='card'>
          <table style={{width:'100%'}}>
            <thead><tr><th>Name</th><th>GMP</th><th>Info</th></tr></thead>
            <tbody>
              {data.rows.slice(0,8).map((r,i)=>(<tr key={i}><td style={{padding:8}}>{r.name}</td><td>{r.gmp}</td><td>{r.other}</td></tr>))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
