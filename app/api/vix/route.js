export const dynamic = 'force-dynamic';
export async function GET(){
  try{
    const res = await fetch('https://www.nseindia.com/api/allIndices', { headers:{ 'User-Agent':'Mozilla/5.0' }, cache:'no-store' });
    if(!res.ok) return new Response(JSON.stringify({ error:'VIX fetch failed', status: res.status }), { status:502 });
    const data = await res.json();
    const vix = (data.data || []).find(i=>/vix/i.test(i.index)) || null;
    return new Response(JSON.stringify({ ok:true, value: vix?.last ?? null, rawIndex: vix }), { status:200 });
  }catch(err){ return new Response(JSON.stringify({ ok:false, error:String(err) }), { status:500 }); }
}
