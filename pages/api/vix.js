export default async function handler(req,res){
  try{
    const r = await fetch('https://www.nseindia.com/api/allIndices', { headers:{ 'User-Agent':'Mozilla/5.0' }, cache:'no-store' });
    if(!r.ok) return res.status(502).json({ error:'VIX fetch failed', status: r.status });
    const data = await r.json();
    const vix = (data.data||[]).find(i=>/vix/i.test(i.index)) || null;
    res.status(200).json({ ok:true, value: vix?.last ?? null, raw: vix });
  }catch(err){ res.status(500).json({ ok:false, error:String(err) }); }
}
