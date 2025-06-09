import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "Features" },
  { href: "/features", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link
        href="/"
        className="pl-6 flex items-center"
      >
        <span className={cn("text-5xl font-bold", poppins.className)}>
          funroad
        </span>
      </Link>

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((n, idx) => (
          <Button
            asChild
            key={idx}
            variant="outline"
            className={cn(
              "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
              pathname.startsWith(n.href) &&
                "bg-black text-white hover:bg-black hover:text-white"
            )}
          >
            <Link href={n.href}>{n.children}</Link>
          </Button>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/log-in">Log in</Link>
        </Button>

        <Button
          asChild
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
        >
          <Link href="/sign-up">Start Selling</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
