import Link from "next/link";
import type { ReactNode } from "react";

interface CallButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function CallButton({
  children,
  href,
  className = "",
}: CallButtonProps) {
  return (
    <Link
      href={href}
      className={`
        ${className}
      `}
    >
      {children}
    </Link>
  );
}