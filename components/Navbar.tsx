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
      <div className="flex items-center cursor-pointer">
        <Link href="/">
          <Image src="/globe.svg" alt="Logo" width={40} height={40} />
        </Link>
      </div>

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
