// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

async function fetchNSEData(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
      "Accept": "application/json",
    },
  });
  return response.json();
}

app.get("/api/live", async (req, res) => {
  try {
    const [nifty, banknifty, vix] = await Promise.all([
      fetchNSEData("https://www.nseindia.com/api/quote-equity?symbol=NIFTY"),
      fetchNSEData("https://www.nseindia.com/api/quote-equity?symbol=BANKNIFTY"),
      fetchNSEData("https://www.nseindia.com/api/quote-indices?index=NIFTY%
