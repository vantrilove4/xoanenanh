import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST() {
  // Lấy dòng "xoanen"
  const { data, error } = await supabaseAdmin
    .from("qr_downloads")
    .select("downloads")
    .eq("qr_text", "xoanen")
    .single();

  if (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }

  // Cộng thêm 1
  const { error: updateError } = await supabaseAdmin
    .from("qr_downloads")
    .update({
      downloads: data.downloads + 1,
    })
    .eq("qr_text", "xoanen");

  if (updateError) {
    return NextResponse.json(
      { success: false, error: updateError.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    downloads: data.downloads + 1,
  });
}