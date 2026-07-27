"use client";

import { Download } from "lucide-react";

interface Props {
  loading: boolean;
  result: string | null;
  onRemove: () => void;
}

export default function ActionPanel({
  loading,
  result,
  onRemove,
}: Props) {
  function downloadImage() {
    if (!result) return;

    const a = document.createElement("a");
    a.href = result;
    a.download = "remove-background.png";
    a.click();
  }

  return (
    <section className="mx-auto mt-10 flex justify-center gap-4">

      <button
        disabled={loading}
        onClick={onRemove}
        className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 disabled:opacity-50"
      >
        {loading ? "Đang xử lý..." : "Xóa nền"}
      </button>

      {result && (
        <button
          onClick={downloadImage}
          className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-green-700"
        >
          <Download size={18} />
          Tải PNG
        </button>
      )}

    </section>
  );
}