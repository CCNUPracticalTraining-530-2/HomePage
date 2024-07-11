import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/common/styles/globals.scss';

import { ThemeProvider } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harmony - 在线即时通讯平台 | 主页',
  description: '爱来自华中师范大学 2022 级计算机学院早安少女组',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-cn" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/harmony-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
