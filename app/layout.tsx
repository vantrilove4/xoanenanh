import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Xóa Nền Ảnh Online",
  description:
    "Xóa nền ảnh miễn phí bằng AI. Tách nền nhanh, không watermark, chất lượng cao.",

  metadataBase: new URL("https://tenmiencuaban.com"),

  openGraph: {
    title: "Xóa Nền Ảnh Online",
    description:
      "Xóa nền ảnh miễn phí bằng AI. Chỉ vài giây là có ảnh PNG nền trong suốt.",

    url: "https://tenmiencuaban.com",

    siteName: "Xóa Nền Ảnh Online",

    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Xóa Nền Ảnh Online",
      },
    ],

    locale: "vi_VN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Xóa Nền Ảnh Online",
    description:
      "Xóa nền ảnh miễn phí bằng AI.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
