import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen bg-gray-50 flex-row">
      <Sidebar />

      {children}
    </main>
  );
}
