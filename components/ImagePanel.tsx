interface Props {
  original: string | null;
  result: string | null;
}

export default function ImagePanel({
  original,
  result,
}: Props) {
  return (
    <section className="mx-auto mt-16 grid max-w-6xl gap-8 px-6 md:grid-cols-2">

      {/* Ảnh gốc */}
      <div className="rounded-3xl border bg-white p-6 shadow-xl">
        <h3 className="mb-5 text-xl font-bold">
          Ảnh gốc
        </h3>

        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(45deg,#f1f5f9_25%,transparent_25%,transparent_75%,#f1f5f9_75%),linear-gradient(45deg,#f1f5f9_25%,transparent_25%,transparent_75%,#f1f5f9_75%)] bg-[length:24px_24px] bg-[position:0_0,12px_12px]">

          {original ? (
            <img
              src={original}
              alt="Original"
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <span className="text-slate-400">
              Chưa có ảnh
            </span>
          )}

        </div>
      </div>

      {/* Ảnh kết quả */}
      <div className="rounded-3xl border bg-white p-6 shadow-xl">
        <h3 className="mb-5 text-xl font-bold">
          Ảnh đã xóa nền
        </h3>

        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-slate-100">

          {result ? (
            <img
              src={result}
              alt="Result"
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <span className="text-slate-400">
              Kết quả sẽ hiển thị tại đây
            </span>
          )}

        </div>
      </div>

    </section>
  );
}