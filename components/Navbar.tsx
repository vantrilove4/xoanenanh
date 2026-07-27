import { Code2, Image } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
            <Image size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              Xóa Nền Ảnh Online
            </h1>

            <p className="text-xs text-slate-500">
              Xóa nền ảnh miễn phí
            </p>
          </div>
        </div>

        <a
          href="#"
          className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
        >
          
         
        </a>
      </div>
    </header>
  );
}