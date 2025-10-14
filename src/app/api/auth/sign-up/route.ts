import { NextResponse } from "next/server"

export async function GET (){
  const deva = "I am the person doing the best thing"
  return NextResponse.json({deva}, {status : 200})
}