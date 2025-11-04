// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/live", async (req, res) => {
  try {
    const [niftyRes, bankniftyRes, vixRes] = await Promise.all([
      fetch("https://www.nseindia.com/api/quote-equity?symbol=NIFTY"),
      fetch("https://www.nseindia.com/api/quote-equity?symbol=BANKNIFTY"),
      fetch("https://www.nseindia.com/api/quote-indices?index=NIFTY%20VIX"),
    ]);

    const nifty = await niftyRes.json();
    const banknifty = await bankniftyRes.json();
    const vix = await vixRes.json();

    res.json({
      nifty: nifty?.info || {},
      banknifty: banknifty?.info || {},
      vix: vix?.data?.[0] || {},
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch live data", details: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Live server running on port ${PORT}`));
