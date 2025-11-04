export const dynamic = 'force-dynamic';
export async function GET(){
  try{
    const res = await fetch('https://www.chittorgarh.com/ipo_gmp/', { headers:{ 'User-Agent':'Mozilla/5.0' }, cache:'no-store' });
    if(!res.ok) return new Response(JSON.stringify({ error:'GMP fetch failed', status: res.status }), { status:502 });
    const html = await res.text();
    const rows = [];
    const re = /<tr[^>]*>\s*<td[^>]*>([^<]+)<\/td>\s*<td[^>]*>([^<]+)<\/td>\s*<td[^>]*>([^<]+)<\/td>/gi;
    let m;
    while((m=re.exec(html))!==null && rows.length<40){
      rows.push({ name: m[1].trim(), gmp: m[2].trim(), other: m[3].trim() });
    }
    if(rows.length===0) return new Response(JSON.stringify({ error:'Could not parse GMP (blocked?)' }), { status:502 });
    return new Response(JSON.stringify({ ok:true, rows }), { status:200 });
  }catch(err){ return new Response(JSON.stringify({ ok:false, error:String(err) }), { status:500 }); }
}
