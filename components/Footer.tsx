import {
  ShieldCheck,
  Cpu,
  Lock,
  Globe2,
  HeartHandshake,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Giới thiệu */}
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Xóa Nền Ảnh AI
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Công cụ xóa nền ảnh trực tuyến dành cho người dùng Việt Nam.
              Sử dụng trí tuệ nhân tạo để tách nền nhanh chóng, miễn phí và
              không cần tải ảnh lên máy chủ xử lý.
            </p>
          </div>

          {/* Cam kết */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Cam kết của chúng tôi
            </h3>

            <ul className="mt-5 space-y-4 text-slate-600">

              <li className="flex gap-3">
                <ShieldCheck
                  className="mt-1 text-green-600"
                  size={18}
                />
                <span>
                  Ảnh được xử lý trực tiếp trên trình duyệt của bạn.
                </span>
              </li>

              <li className="flex gap-3">
                <Lock
                  className="mt-1 text-green-600"
                  size={18}
                />
                <span>
                  Không tải ảnh lên máy chủ nước ngoài để xử lý AI.
                </span>
              </li>

              <li className="flex gap-3">
                <Cpu
                  className="mt-1 text-green-600"
                  size={18}
                />
                <span>
                  AI hoạt động trên thiết bị của bạn giúp tăng tính riêng tư.
                </span>
              </li>

            </ul>
          </div>

          {/* Thông tin */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Thông tin
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex gap-3 text-slate-600">
                <Globe2
                  className="mt-1 text-blue-600"
                  size={18}
                />

                <span>
                  Website phát triển tại Việt Nam.
                </span>
              </div>

              <div className="flex gap-3 text-slate-600">
                <HeartHandshake
                  className="mt-1 text-red-500"
                  size={18}
                />

                <span>
                  Miễn phí sử dụng cho học tập, công việc và kinh doanh.
                </span>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © 2026 xoanenanh.io.vn • Xóa nền ảnh bằng AI • Bảo vệ quyền riêng tư của người dùng Việt Nam.
          <br />Made by Tri Nguyen
            
        </div>

      </div>
    </footer>
  );
}