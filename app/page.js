
"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  const generate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({
        destination: "Goa",
        days: 2,
        budget: "Standard",
        interests: ["Beach"]
      })
    });
    const d = await res.json();
    setData(d);
  };

  return (
    <div style={{padding:20}}>
      <h1>✈️ AI Travel Planner</h1>
      <button onClick={generate}>Generate Plan</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
