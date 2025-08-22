import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Link In Bio",
  description: "Rocky's Link In Bio",
  icons: {
    icon: "/images/snoppy.png",
  },
};

const WallpaperWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="wallpaper-container">{children}</div>;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WallpaperWrapper>
          <div className="animated">{children}</div>
        </WallpaperWrapper>
      </body>
    </html>
  );
}
