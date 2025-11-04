export default async function handler(req, res) {
  try {
    const response = await fetch("https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY", {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json",
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch live data" });
  }
}
