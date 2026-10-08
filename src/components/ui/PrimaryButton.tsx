import Link from "next/link";
import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function PrimaryButton({
  children,
  href,
  className = "",
  type = "button",
  onClick,
}: PrimaryButtonProps) {
  const classes = `
    inline-flex items-center justify-center
    rounded-full
    border border-[#A9844D]
    bg-[#C9A66B]
    px-6 py-3
    text-sm font-bold
    text-[#20231D]
    shadow-[0_8px_24px_rgba(169,132,77,0.18)]
    transition-all duration-300
    hover:-translate-y-0.5
    hover:bg-[#A9844D]
    hover:shadow-[0_12px_30px_rgba(169,132,77,0.25)]
    focus:outline-none
    focus:ring-2
    focus:ring-[#C9A66B]/40
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}