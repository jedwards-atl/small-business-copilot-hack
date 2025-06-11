import LandingNav from "@/components/LandingNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <LandingNav />

      {children}
    </main>
  );
}
