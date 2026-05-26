'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Breadcrumbs() {

    const pathname = usePathname()
    const segments: string[] = pathname.split("/").filter(Boolean)

    const formatLabel = (text: string): string => {
        return text 
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase());
    }

    return (
    <nav className="text-md text-gray-600  max-w-7xl mx-auto p-4">
      <Link href="/" className="hover:text-black transition-colors">
        Hem
      </Link>

      {segments.map((segment: string, index: number) => {
        const href: string =
          "/" + segments.slice(0, index + 1).join("/");

        return (
          <span key={href}>
            {" > "}
            <Link
              href={href}
              className="hover:text-black font-semibold transition-colors"
            >
              {formatLabel(decodeURIComponent(segment))}
            </Link>
          </span>
        );
      })}
    </nav>
  )
}
