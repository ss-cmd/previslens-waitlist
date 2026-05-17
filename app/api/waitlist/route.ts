import { NextResponse } from "next/server"

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME

type WaitlistPayload = {
  email?: string
  role?: string
  socialLink?: string
}

function badRequest(message: string) {
  return NextResponse.json({ message }, { status: 400 })
}

export async function POST(request: Request) {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
    return NextResponse.json({ message: "Waitlist backend is not configured." }, { status: 500 })
  }

  const body = (await request.json().catch(() => null)) as WaitlistPayload | null

  if (!body) {
    return badRequest("Invalid request body.")
  }

  const email = body.email?.trim()
  const role = body.role?.trim()
  const socialLink = body.socialLink?.trim()

  if (!email) {
    return badRequest("Email is required.")
  }

  if (!role) {
    return badRequest("Role is required.")
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return badRequest("Please enter a valid email address.")
  }

  const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        Email: email,
        Location: socialLink || role,
        Date: new Date().toISOString().slice(0, 10),
      },
    }),
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => "")
    console.error("Airtable waitlist submission failed:", errorText)
    return NextResponse.json({ message: "Failed to submit waitlist entry." }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
