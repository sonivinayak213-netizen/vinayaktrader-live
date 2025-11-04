export default async function handler(req, res){
  const symbol = (req.query.symbol || 'NIFTY').toUpperCase();
  const target = `https://www.nseindia.com/api/option-chain-indices?symbol=${encodeURIComponent(symbol)}`;
  const headers = { 'User-Agent':'Mozilla/5.0', 'Accept':'application/json', 'Referer':'https://www.nseindia.com' };
  try{
    const response = await fetch(target, { headers, cache: 'no-store' });
    if(!response.ok) return res.status(502).json({ error:'NSE fetch failed', status: response.status });
    const json = await response.json();
    const rows = json?.records?.data || [];
    let totalCallOI=0, totalPutOI=0;
    for(const r of rows){
      const ce = r.CE || r.ce || r.call || {};
      const pe = r.PE || r.pe || r.put || {};
      const callOI = Number(ce.openInterest ?? ce.oi ?? 0) || 0;
      const putOI  = Number(pe.openInterest ?? pe.oi ?? 0) || 0;
      totalCallOI += callOI; totalPutOI += putOI;
    }
    const pcr = totalCallOI===0?null:+(totalPutOI/totalCallOI).toFixed(2);
    res.status(200).json({ ok:true, symbol, totalCallOI, totalPutOI, pcr, rowsCount: rows.length });
  }catch(err){ res.status(500).json({ ok:false, error: String(err) }); }
}
