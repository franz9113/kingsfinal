import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <div className={`${
        isHomePage
          ? "flex flex-col items-center gap-y-4 mb-4"
          : "flex justify-between mb-4"
      }`}>
      <p className="regular-16 hover:bold-16">
        <Link href="/product/bencocky">Ben Cocky</Link>
      </p>
      {!isHomePage && <span>|</span>}
      <p className="regular-16 hover:bold-16">
        <Link href="/product/limvodka">Lim Vodka</Link>
      </p>
      {!isHomePage && <span>|</span>}
      <p className="regular-16 hover:bold-16">
        <Link href="/product/loyalbandit">Loyal Bandit</Link>
      </p>
    </div>
  );
};

export default Links;
