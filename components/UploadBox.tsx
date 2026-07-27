"use client";

import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

interface Props {
  onUpload: (file: File) => void;
}

export default function UploadBox({ onUpload }: Props) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false,

    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onUpload(acceptedFiles[0]);
      }
    },
  });

  return (
    <section className="mx-auto mt-16 max-w-5xl px-6">
      <div
        {...getRootProps()}
        className="cursor-pointer rounded-3xl border-2 border-dashed border-blue-300 bg-white p-14 shadow-xl transition hover:border-blue-500 hover:shadow-2xl"
      >
        <input {...getInputProps()} />

        <div className="flex flex-col items-center">
          <div className="rounded-full bg-blue-100 p-5">
            <UploadCloud
              size={44}
              className="text-blue-600"
            />
          </div>

          <h2 className="mt-6 text-2xl font-bold">
            Tải ảnh lên
          </h2>

          <p className="mt-3 text-slate-500">
            Kéo & Thả hoặc Nhấp vào Đây
          </p>

          <button
            type="button"
            className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white"
          >
            Chọn ảnh
          </button>

          <p className="mt-5 text-sm text-slate-400">
            Hỗ trợ PNG • JPG • WEBP
          </p>
        </div>
      </div>
    </section>
  );
}