import { db } from "@/lib/firebase-admin";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const docRef = db.collection("test").doc("hello");
    await docRef.set({
      message: "Olá do Firebase via App Router!",
      timestamp: new Date().toISOString(),
    });

    const doc = await docRef.get();

    return NextResponse.json({
      success: true,
      data: doc.data(),
    });
  } catch (error) {
    console.error("Erro Firebase:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno" },
      { status: 500 }
    );
  }
}
