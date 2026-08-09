import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Sparkles,
  BookOpen,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Xóa Nền Ảnh | Hướng Dẫn AI, PNG và Chỉnh Sửa Ảnh",
  description:
    "Hướng dẫn xóa nền ảnh online, tạo ảnh PNG trong suốt, sử dụng AI xử lý hình ảnh và các mẹo chỉnh sửa ảnh hữu ích.",
  alternates: {
    canonical: "https://xoanenanh.io.vn/blog",
  },
  openGraph: {
    title: "Blog Xóa Nền Ảnh | Hướng Dẫn AI, PNG và Chỉnh Sửa Ảnh",
    description:
      "Kiến thức và hướng dẫn về xóa nền ảnh, AI, PNG và chỉnh sửa hình ảnh.",
    url: "https://xoanenanh.io.vn/blog",
    siteName: "Xóa Nền Ảnh AI",
    locale: "vi_VN",
    type: "website",
  },
};

const posts = [
  {
    slug: "cach-xoa-background-anh-online",
    title: "Cách xóa background ảnh online miễn phí bằng AI",
    description:
      "Hướng dẫn cách xóa nền ảnh trực tuyến nhanh chóng bằng AI mà không cần cài đặt Photoshop hay phần mềm chỉnh sửa ảnh.",
    category: "Xóa nền ảnh",
    date: "09/08/2026",
    readTime: "5 phút đọc",
  },
  {
    slug: "xoa-nen-anh-bang-ai",
    title: "Xóa nền ảnh bằng AI hoạt động như thế nào?",
    description:
      "Tìm hiểu cách AI nhận diện chủ thể và tự động tách nền khỏi hình ảnh trực tiếp trên trình duyệt.",
    category: "AI",
    date: "08/08/2026",
    readTime: "6 phút đọc",
  },
  {
    slug: "cach-tao-anh-png-trong-suot",
    title: "Cách tạo ảnh PNG nền trong suốt online",
    description:
      "Hướng dẫn tạo ảnh PNG nền trong suốt để sử dụng cho thiết kế, bán hàng, website và mạng xã hội.",
    category: "PNG",
    date: "07/08/2026",
    readTime: "5 phút đọc",
  },
  {
    slug: "xoa-background-anh-bang-dien-thoai",
    title: "Cách xóa background ảnh trên điện thoại",
    description:
      "Hướng dẫn xóa nền ảnh trực tiếp trên điện thoại Android và iPhone mà không cần cài phần mềm phức tạp.",
    category: "Hướng dẫn",
    date: "06/08/2026",
    readTime: "5 phút đọc",
  },
  {
    slug: "anh-chan-dung-nen-trong-suot",
    title: "Cách tạo ảnh chân dung nền trong suốt",
    description:
      "Mẹo tạo ảnh chân dung không nền để sử dụng cho hồ sơ, thiết kế, thẻ cá nhân và nhiều mục đích khác.",
    category: "Ảnh chân dung",
    date: "05/08/2026",
    readTime: "4 phút đọc",
  },
  {
    slug: "png-va-jpg-khac-nhau-nhu-the-nao",
    title: "PNG và JPG khác nhau như thế nào?",
    description:
      "So sánh PNG và JPG, tìm hiểu khi nào nên sử dụng ảnh nền trong suốt và định dạng nào phù hợp.",
    category: "Kiến thức ảnh",
    date: "04/08/2026",
    readTime: "4 phút đọc",
  },
];



export default function BlogPage() {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles size={16} />
              Blog Xóa Nền Ảnh AI
            </div>

            <h1 className="mt-6 text-4xl font-tahoma tracking-tight text-slate-900 md:text-5xl bold">
              Kiến thức về{" "}
              <span className="text-blue-600">
                xóa nền ảnh, AI và chỉnh sửa ảnh
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Hướng dẫn đơn giản, dễ hiểu giúp bạn xử lý hình ảnh,
              tạo ảnh PNG trong suốt và tận dụng các công cụ AI trực tuyến.
            </p>
          </div>

          {/* CATEGORY */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* FEATURED */}
        <section>
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Nổi bật
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
                Bài viết được quan tâm
              </h2>
            </div>
          </div>

          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="grid md:grid-cols-[1.3fr_1fr]">
              {/* Visual không dùng ảnh */}
              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-10">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
                <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10" />

                <div className="relative text-center text-white">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
                    <BookOpen size={38} />
                  </div>

                  <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-blue-100">
                    Bài viết nổi bật
                  </p>

                  <p className="mt-3 text-2xl font-bold">
                    Hướng dẫn xóa background ảnh bằng AI
                  </p>
                </div>
              </div>

              {/* Featured content */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">
                    {featuredPost.category}
                  </span>

                  <span className="flex items-center gap-1.5 text-slate-500">
                    <CalendarDays size={15} />
                    {featuredPost.date}
                  </span>

                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Clock3 size={15} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900">
                  {featuredPost.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {featuredPost.description}
                </p>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Đọc bài viết
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </article>
        </section>

        {/* LATEST */}
        <section className="mt-16">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Blog
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
                Bài viết mới nhất
              </h2>
            </div>

            <span className="hidden text-sm text-slate-500 md:block">
              {otherPosts.length} bài viết
            </span>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                {/* Category */}
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 transition group-hover:bg-blue-50 group-hover:text-blue-700">
                    {post.category}
                  </span>

                  <span className="text-xs text-slate-400">
                    {post.date}
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-7 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <BookOpen size={22} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold leading-7 text-slate-900 transition group-hover:text-blue-600">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {post.description}
                </p>

                {/* Meta + link */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock3 size={14} />
                    {post.readTime}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition group-hover:gap-2.5"
                  >
                    Đọc tiếp
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-center text-white md:px-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Sparkles size={26} />
              </div>

              <h2 className="mt-5 text-3xl font-bold">
                Xóa nền ảnh ngay trên trình duyệt
              </h2>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-blue-100">
                Không cần cài phần mềm. Tải ảnh lên và để AI tự động
                tách nền ngay trên thiết bị của bạn.
              </p>

              <Link
                href="/"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
              >
                Xóa nền ảnh miễn phí
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* SEO FOOTER NOTE */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm leading-6 text-slate-500">
            Xóa Nền Ảnh AI chia sẻ các hướng dẫn về xóa background,
            ảnh PNG trong suốt, công nghệ AI và các mẹo xử lý hình ảnh
            hữu ích cho người dùng Việt Nam.
          </p>
        </div>
      </div>
    </main>
  );
}