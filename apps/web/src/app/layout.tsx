import type { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js + @nity/ui',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
