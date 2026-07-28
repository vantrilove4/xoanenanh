import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xoanenanh.io.vn"),

  title: {
    default: "Xóa Nền Ảnh AI Miễn Phí Online | xoanenanh.io.vn",
    template: "%s | xoanenanh.io.vn",
  },

  description:
    "Xóa nền ảnh miễn phí bằng AI chỉ trong vài giây. Hỗ trợ PNG, JPG, WEBP. Không cần đăng ký, không watermark, xử lý trực tiếp trên trình duyệt.",

  keywords: [
    "xóa nền ảnh",
    "xóa background ảnh",
    "xóa nền ảnh online",
    "AI xóa nền",
    "tách nền ảnh",
    "remove background",
    "background remover",
    "transparent png",
    "xóa phông ảnh",
    "remove bg",
    "xóa nền miễn phí",
  ],

  authors: [
    {
      name: "xoanenanh.io.vn",
      url: "https://xoanenanh.io.vn",
    },
  ],

  creator: "xoanenanh.io.vn",

  publisher: "xoanenanh.io.vn",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://xoanenanh.io.vn",
  },

  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://xoanenanh.io.vn",
    siteName: "Xóa Nền Ảnh AI",

    title: "Xóa Nền Ảnh AI Miễn Phí Online",

    description:
      "Xóa nền ảnh bằng AI chỉ trong vài giây. Miễn phí, không watermark, không cần đăng ký.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xóa Nền Ảnh AI",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Xóa Nền Ảnh AI Miễn Phí",

    description:
      "Xóa nền ảnh online miễn phí bằng AI. Hỗ trợ PNG, JPG, WEBP.",

    images: ["/og-image.png"],
  },

  category: "technology",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}