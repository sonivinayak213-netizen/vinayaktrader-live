// app/api/test/route.js
export const dynamic = 'force-dynamic';

export async function GET(req) {
  const body = {
    message: "Backend Connected ✅",
    time: new Date().toISOString(),
  };
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
