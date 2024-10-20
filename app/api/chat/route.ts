export async function POST(request: Request) {
  const { consulta } = await request.json();

  const response = await fetch('http://localhost:5000/consulta', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ consulta }),
  });
  
  const data = await response.json();

  return new Response(JSON.stringify({ reply: data.reply }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
