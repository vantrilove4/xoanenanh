"use client";

import { useState } from "react";

export function useImage() {
  const [original, setOriginal] = useState<string | null>(null);

  const [result, setResult] = useState<string | null>(null);

  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  function upload(file: File) {
    setFile(file);
    setOriginal(URL.createObjectURL(file));
    setResult(null);
  }

  return {
    file,

    original,
    result,

    loading,

    setLoading,

    setResult,

    upload,
  };
}