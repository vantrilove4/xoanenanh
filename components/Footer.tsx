"use client";

import { useEffect, useState } from "react";
import {
  Cpu,
  Globe2,
  HeartHandshake,
  Lock,
  ShieldCheck,
  Users,
  Activity,
} from "lucide-react";

export default function Footer() {
  const [downloads, setDownloads] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState<number | null>(null);

  useEffect(() => {
    async function loadCount() {
      try {
        const res = await fetch("/api/visit/count");
        const json = await res.json();

        if (json.success) {
          setDownloads(json.downloads);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadCount();

    // Tạm giả lập số người đang sử dụng
    setOnlineUsers(Math.floor(Math.random() * 8) + 3);
  }, []);

  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Giới thiệu */}
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Xóa Nền Ảnh AI
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Công cụ xóa nền ảnh trực tuyến miễn phí dành cho người dùng Việt
              Nam. AI xử lý trực tiếp trên trình duyệt giúp bảo vệ quyền riêng tư
              và không cần tải ảnh lên máy chủ để xử lý.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
  Cần tạo mã QR? Hãy thử{" "}
  <a
    href="https://qrfree.io.vn"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
  >
    QRFree.io.vn
  </a>{" "}
  – công cụ tạo mã QR miễn phí hỗ trợ URL, WiFi, vCard, PDF và nhiều định dạng khác.
</p>

<p className="mt-4 leading-7 text-slate-600">
  Cần xử lý file PDF? Hãy thử{" "}
  <a
    href="https://vietdocs.io.vn"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
  >
    vietdocs.io.vn
  </a>{" "}
  – VietDocs – Công cụ xử lý tài liệu trực tuyến, hỗ trợ các nhu cầu làm việc với PDF, Word và nhiều định dạng tài liệu khác.
</p>
          </div>

          {/* Cam kết */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Cam kết bảo mật
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex gap-3">
                <ShieldCheck
                  size={18}
                  className="mt-1 shrink-0 text-green-600"
                />
                <span className="text-slate-600">
                  AI xử lý trực tiếp trên trình duyệt của bạn.
                </span>
              </div>

              <div className="flex gap-3">
                <Lock
                  size={18}
                  className="mt-1 shrink-0 text-green-600"
                />
                <span className="text-slate-600">
                  Không tải ảnh lên máy chủ để xử lý AI.
                </span>
              </div>

              <div className="flex gap-3">
                <Cpu
                  size={18}
                  className="mt-1 shrink-0 text-green-600"
                />
                <span className="text-slate-600">
                  Dữ liệu luôn nằm trên thiết bị của bạn.
                </span>
              </div>
            </div>
          </div>

          {/* Thống kê */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Thống kê
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex gap-3">
                <Globe2
                  size={18}
                  className="mt-1 shrink-0 text-blue-600"
                />
                <span className="text-slate-600">
                  Phát triển dành riêng cho người dùng Việt Nam.
                </span>
              </div>

              <div className="flex gap-3">
                <Users
                  size={18}
                  className="mt-1 shrink-0 text-blue-600"
                />
                <span className="font-semibold text-blue-700">
                  Đã phục vụ: {downloads.toLocaleString("vi-VN")} lượt truy cập
                </span>
              </div>

              <div className="flex gap-3">
                <Activity
                  size={18}
                  className="mt-1 shrink-0 text-emerald-600"
                />
                <span className="font-semibold text-emerald-600">
                  Đang sử dụng: {onlineUsers ?? "--"} người
                </span>
              </div>

              <div className="flex gap-3">
                <HeartHandshake
                  size={18}
                  className="mt-1 shrink-0 text-red-500"
                />
                <span className="text-slate-600">
                  Miễn phí cho học tập, công việc và kinh doanh.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row">
            <p className="text-sm text-slate-500">
              © 2026{" "}
              <span className="font-semibold text-slate-700">
                xoanenanh.io.vn
              </span>
              . AI xử lý trực tiếp trên trình duyệt • Không tải ảnh lên máy chủ
              để xử lý.
            </p>

            <p className="text-sm text-slate-400">
              Made with ❤️ by{" "}
              <span className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Trí Nguyễn
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}