export async function GET(req: Request) {
  return new Response(JSON.stringify({ alive: true }));
}
