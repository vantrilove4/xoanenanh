import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("qr_downloads")
    .select("downloads")
    .eq("qr_text", "xoanen")
    .single();

  if (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    downloads: data.downloads,
  });
}