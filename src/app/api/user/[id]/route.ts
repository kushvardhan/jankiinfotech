import { NextResponse } from 'next/server'
import { connectToDB } from '@/lib/mongodb'
import User

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDB()
    const user = await User.findById(params.id)

    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
