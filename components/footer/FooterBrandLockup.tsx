import Image from "next/image";
import Link from "next/link";

const BANNER = {
  src: "/brand/coderverse-technology-banner.png",
  width: 905,
  height: 351,
} as const;

export function FooterBrandLockup() {
  return (
    <Link
      href="#top"
      className="block w-fit transition-opacity hover:opacity-90"
      aria-label="Coderverse Technology — back to top"
    >
      <Image
        src={BANNER.src}
        alt="Coderverse Technology"
        width={BANNER.width}
        height={BANNER.height}
        className="h-12 w-auto max-h-[4.25rem] max-w-[11rem] object-contain object-left sm:h-14 md:h-16 lg:h-[4.25rem]"
        unoptimized
        priority
      />
    </Link>
  );
}
