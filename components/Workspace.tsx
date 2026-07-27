"use client";

import UploadBox from "./UploadBox";
import ImagePanel from "./ImagePanel";
import ActionPanel from "./ActionPanel";

import { useImage } from "@/hooks/useImage";
import { removeBg } from "@/lib/removeBackground";

export default function Workspace() {
  const {
    file,
    original,
    result,
    loading,
    setLoading,
    setResult,
    upload,
  } = useImage();

  async function handleRemove() {
    if (!file) return;

    setLoading(true);

    try {
      const output = await removeBg(file);
      setResult(output);
    } catch (error) {
      console.error("Remove background failed:", error);
      alert("Không thể xóa nền. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <UploadBox onUpload={upload} />

      <ImagePanel
        original={original}
        result={result}
      />

      <ActionPanel
  loading={loading}
  result={result}
  onRemove={handleRemove}
/>
    </>
  );
}