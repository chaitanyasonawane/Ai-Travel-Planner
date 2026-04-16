
export async function POST(req) {
  const body = await req.json();

  return Response.json({
    destination: body.destination,
    total_budget: "₹20,000",
    days: [
      {
        day: 1,
        title: "Beach Day",
        activities: [
          {
            time: "Morning",
            name: "Beach Visit",
            description: "Relax at beach",
            cost: "₹500"
          }
        ]
      }
    ],
    tips: ["Stay hydrated"]
  });
}
