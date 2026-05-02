import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  return NextResponse.json(
    {
      ok: true,
      message:
        "Contact endpoint is ready for future form integration. Replace this placeholder response with your preferred email or CRM workflow.",
      received: body,
    },
    { status: 200 },
  );
}

export function GET() {
  return NextResponse.json({
    ok: true,
    message:
      "Use POST /api/contact to submit future contact form data to this placeholder endpoint.",
  });
}
