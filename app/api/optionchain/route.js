export const dynamic = 'force-dynamic';
export async function GET(req){
  const { searchParams } = new URL(req.url);
  const symbol = (searchParams.get('symbol') || 'NIFTY').toUpperCase();
  const target = `https://www.nseindia.com/api/option-chain-indices?symbol=${encodeURIComponent(symbol)}`;
  const headers = { 'User-Agent':'Mozilla/5.0', 'Accept':'application/json', 'Referer':'https://www.nseindia.com' };
  try{
    const res = await fetch(target, { headers, cache: 'no-store' });
    if(!res.ok) return new Response(JSON.stringify({ error: 'NSE fetch failed', status: res.status }), { status:502 });
    const json = await res.json();
    const rows = json?.records?.data ?? [];
    let totalCallOI=0, totalPutOI=0;
    for(const r of rows){
      const ce = r.CE ?? r.ce ?? r.call ?? {};
      const pe = r.PE ?? r.pe ?? r.put ?? {};
      const callOI = Number(ce.openInterest ?? ce.oi ?? 0) || 0;
      const putOI = Number(pe.openInterest ?? pe.oi ?? 0) || 0;
      totalCallOI += callOI; totalPutOI += putOI;
    }
    const pcr = totalCallOI===0?null:+(totalPutOI/totalCallOI).toFixed(2);
    return new Response(JSON.stringify({ ok:true, symbol, summary:{ totalCallOI, totalPutOI, pcr }, rowsCount: rows.length }), { status:200 });
  }catch(err){ return new Response(JSON.stringify({ ok:false, error: String(err) }), { status:500 }); }
}
