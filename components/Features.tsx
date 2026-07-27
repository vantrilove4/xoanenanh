import { Brain, ShieldCheck, Zap, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Nhanh",
    desc: "Xóa nền chỉ trong vài giây.",
  },
  {
    icon: Brain,
    title: "AI Powered",
    desc: "Ứng dụng công nghệ AI hiện đại.",
  },
  {
    icon: ShieldCheck,
    title: "Riêng tư",
    desc: "Ảnh được xử lý ngay trên trình duyệt. Không lưu lên máy chủ.",
  },
  {
    icon: BadgeCheck,
    title: "Miễn phí",
    desc: "Sử dụng không giới hạn mà không có watermark.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto mt-24 mb-20 max-w-6xl px-6">
      <div className="grid gap-6 md:grid-cols-4">
        {features.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <item.icon className="mb-5 text-blue-600" size={34} />

            <h3 className="text-lg font-bold">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}