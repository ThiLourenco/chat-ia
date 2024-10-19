export async function POST(request: Request) {
  const { message } = await request.json();

  const response = await fetch('URL_DA_API', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer SEU_TOKEN',
    },
    body: JSON.stringify({ prompt: message }),
  });

  const data = await response.json();

  return new Response(JSON.stringify({ reply: data.reply }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
