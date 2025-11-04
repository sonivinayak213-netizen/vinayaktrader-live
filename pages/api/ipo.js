export default async function handler(req,res){
  try{
    const r = await fetch('https://www.chittorgarh.com/ipo_gmp/', { headers:{ 'User-Agent':'Mozilla/5.0' }, cache:'no-store' });
    if(!r.ok) return res.status(502).json({ error:'GMP fetch failed', status: r.status });
    const html = await r.text();
    const rows = [];
    const re = /<tr[^>]*>\s*<td[^>]*>([^<]+)<\/td>\s*<td[^>]*>([^<]+)<\/td>\s*<td[^>]*>([^<]+)<\/td>/gi;
    let m;
    while((m=re.exec(html))!==null && rows.length<80){
      rows.push({ name: m[1].trim(), gmp: m[2].trim(), other: m[3].trim() });
    }
    if(rows.length===0) return res.status(502).json({ ok:false, error:'Could not parse GMP (blocked?)' });
    res.status(200).json({ ok:true, rows });
  }catch(err){ res.status(500).json({ ok:false, error:String(err) }); }
}
