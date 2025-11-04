export async function GET() {
  try {
    const [niftyRes, bankniftyRes, vixRes] = await Promise.all([
      fetch("https://www.nseindia.com/api/quote-equity?symbol=NIFTY"),
      fetch("https://www.nseindia.com/api/quote-equity?symbol=BANKNIFTY"),
      fetch("https://www.nseindia.com/api/quote-indices?index=NIFTY%20VIX")
    ]);

    const nifty = await niftyRes.json();
    const banknifty = await bankniftyRes.json();
    const vix = await vixRes.json();

    return Response.json({ nifty, banknifty, vix });
  } catch (e) {
    return Response.json({ error: "Failed to fetch live data", details: e.message });
  }
}
