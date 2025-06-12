"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Features", href: "/features" },
  { label: "Demo", href: "/demo" },
  { label: "How To Get It", href: "/how-to-get-it" },
  { label: "Pricing", href: "/pricing" },
  { label: "Partners", href: "/partners" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="container flex items-center justify-between mx-auto w-full py-4 max-sm:px-4">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute inset-0 bg-azure-600 rounded-full opacity-50 blur-xl scale-75"></div>
          <Image
            src="/ai-orb.png"
            className="relative z-10 bg-transparent"
            alt="orb"
            width={77}
            height={77}
          />
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-900">Business Buddy</div>
          <div className="text-sm text-gray-500">powered by Simply Business</div>
        </div>
      </Link>

      <div className="flex items-center gap-8">
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={cn(pathname === href && "font-semibold")}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
