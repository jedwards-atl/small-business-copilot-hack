import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full h-full bg-gray-50 flex-row">
      <Sidebar />

      <div className="flex flex-col w-full h-full bg-gray-50 px-16 lg:container lg:mx-auto">
        <Header />

        {children}
      </div>
    </main>
  );
}
