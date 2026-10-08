import Link from "next/link";
import type { ReactNode } from "react";

interface WhatsAppButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
}

export default function WhatsAppButton({
  children,
  href,
  className = "",
  target = "_blank",
  rel = "noopener noreferrer",
}: WhatsAppButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      data-track="goa-whatsapp"
      className={`
        inline-flex items-center justify-center
        rounded-full
        border border-[#128C7E]
        bg-[#25D366]
        px-6 py-3
        text-sm font-bold
        text-white
        shadow-[0_6px_18px_rgba(37,211,102,0.22)]
        transition-all duration-300
        hover:-translate-y-0.5
        hover:bg-[#128C7E]
        hover:shadow-[0_10px_26px_rgba(37,211,102,0.28)]
        focus:outline-none
        focus:ring-2
        focus:ring-[#25D366]/40
        ${className}
      `}
    >
      {children}
    </Link>
  );
}