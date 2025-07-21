import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Orbitron, Rajdhani } from "next/font/google";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const orbitron = Orbitron({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
})

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rajdhani',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RÉSURGENCE - Disparaître en homme. Revenir en légende.",
  description: "Camp d'entraînement masculin extrême. Transformation physique, mentale et stratégique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <head>
      <title>RÉSURGENCE — Disparaître en Homme. Revenir en Légende.</title>
      <meta name="description" content="Camp masculin extrême pour hommes en transformation. Tu rentres en fantôme. Tu ressors en légende." />
    
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${orbitron.variable} ${rajdhani.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}