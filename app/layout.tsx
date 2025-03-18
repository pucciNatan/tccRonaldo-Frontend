import type { Metadata } from "next";
import "./styles/globals.css";


export const metadata: Metadata = {
  title: "Artfolio",
  description: "Encontre os melhores editores",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
