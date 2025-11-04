'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // agar tu shadcn use kar raha hai

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/live");
        const d = await res.json();
        setData(d);
      } catch (e) {
        console.error("Error fetching live data:", e);
      }
    }

    loadData();
    const interval = setInterval(loadData, 10000); // har 10 sec me refresh
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>📊 VinayakTrader — Live Dashboard</h1>
      <p style={{ color: '#9fb2c8' }}>Overview — Use the nav to open Options / VIX / IPO</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12,
          marginTop: 16
        }}
      >
        <Card>
          <CardHeader>NIFTY (live)</CardHeader>
          <CardContent>{data ? data.nifty?.lastPrice || "—" : "Loading..."}</CardContent>
        </Card>

        <Card>
          <CardHeader>BANKNIFTY (live)</CardHeader>
          <CardContent>{data ? data.banknifty?.lastPrice || "—" : "Loading..."}</CardContent>
        </Card>

        <Card>
          <CardHeader>VIX</CardHeader>
          <CardContent>{data ? data.vix?.lastPrice || "—" : "Loading..."}</CardContent>
        </Card>
      </div>
    </div>
  );
}
