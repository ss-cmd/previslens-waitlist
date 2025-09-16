import { type NextRequest, NextResponse } from "next/server"
import axios from "axios"

// 从环境变量获取 Airtable 配置信息
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME

// 获取用户的地理位置（IP 地理位置服务）
const getUserLocation = async () => {
  try {
    const response = await axios.get("https://ipinfo.io/json")
    return response.data
  } catch (error) {
    console.error("Error fetching location:", error)
    return null
  }
}

const saveEmailToAirtable = async (email: string, role: string, socialLink: string, userLocation: any) => {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`
  const currentTime = new Date().toISOString().split("T")[0]

  try {
    const response = await axios.post(
      url,
      {
        records: [
          {
            fields: {
              Email: email,
              Role: [role],
              SocialLink: socialLink || "", // Handle optional field
              Date: currentTime,
              Location: userLocation ? userLocation.city : "Unknown",
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    )

    console.log("Email saved to Airtable:", response.data)
    return response.data
  } catch (error: any) {
    if (error.response) {
      console.error("Error response data:", error.response.data)
      console.error("Error response status:", error.response.status)
      console.error("Error response headers:", error.response.headers)
    } else {
      console.error("Error message:", error.message)
    }
    throw new Error("Failed to save email to Airtable")
  }
}

// 邮箱格式验证函数
function validateEmail(email: string) {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
  return regex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const { email, role, socialLink } = await request.json()

    // 校验邮箱格式
    if (!email || !validateEmail(email)) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 })
    }

    if (!role) {
      return NextResponse.json({ message: "Role is required" }, { status: 400 })
    }

    // 获取用户的地理位置信息
    const userLocation = await getUserLocation()

    await saveEmailToAirtable(email, role, socialLink, userLocation)

    return NextResponse.json({ message: "Email saved successfully!" })
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
