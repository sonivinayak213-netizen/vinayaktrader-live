export async function GET() {
  try {
    const data = {
      nifty: { lastPrice: 22185.45 },
      banknifty: { lastPrice: 48425.10 },
      vix: { lastPrice: 12.45 }
    };
    return Response.json(data);
  } catch (e) {
    return Response.json({ error: "Failed to fetch live data", details: e.message });
  }
}
