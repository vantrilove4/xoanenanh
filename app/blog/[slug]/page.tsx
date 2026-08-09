import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
} from "lucide-react";

import { blogPosts, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Không tìm thấy bài viết",
    };
  }

  return {
    title: post.title,
    description: post.description,

    alternates: {
      canonical: `https://xoanenanh.io.vn/blog/${post.slug}`,
    },

    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://xoanenanh.io.vn/blog/${post.slug}`,
      siteName: "Xóa Nền Ảnh AI",
      locale: "vi_VN",
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const baseUrl = "https://xoanenanh.io.vn";
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.description,
    image: [`${baseUrl}${post.image}`],
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    author: {
      "@type": "Person",
      name: "Tri Nguyen",
    },
    publisher: {
      "@type": "Organization",
      name: "Xóa Nền Ảnh AI",
      url: baseUrl,
    },
    inLanguage: "vi-VN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/"
              className="transition hover:text-blue-600"
            >
              Trang chủ
            </Link>

            <ChevronRight size={15} />

            <Link
              href="/blog"
              className="transition hover:text-blue-600"
            >
              Blog
            </Link>

            <ChevronRight size={15} />

            <span className="line-clamp-1 text-slate-400">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-14">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
              {post.category}
            </span>

            <span className="flex items-center gap-1.5 text-sm text-slate-500">
              <CalendarDays size={15} />
              {new Date(post.date).toLocaleDateString("vi-VN")}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {post.description}
          </p>
        </div>
      </header>

      {/* Article image */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl bg-slate-100 shadow-sm">
          <img
            src={post.image}
            alt={post.title}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 py-14">
        <div className="prose prose-slate max-w-none">
          {post.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="mt-12 text-2xl font-bold tracking-tight text-slate-900"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "list") {
              return (
                <ul
                  key={index}
                  className="my-6 space-y-3 pl-6 text-lg leading-8 text-slate-700"
                >
                  {block.items?.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p
                key={index}
                className="mt-6 text-lg leading-8 text-slate-700"
              >
                {block.text}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white md:p-10">
          <h2 className="text-2xl font-bold">
            Bạn muốn xóa nền ảnh ngay?
          </h2>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-blue-100">
            Tải ảnh lên và để AI tự động tách nền trực tiếp trên trình duyệt
            của bạn.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Xóa nền ảnh miễn phí
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Back */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Quay lại Blog
          </Link>
        </div>
      </article>
    </main>
   
  );
}