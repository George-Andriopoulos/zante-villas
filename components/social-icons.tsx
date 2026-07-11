import { cn } from "@/lib/utils";

export function FacebookIcon({
  size = 17,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      className={cn(className)}
      aria-hidden
    >
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5h1.4V4.2C15.6 4.1 14.7 4 13.7 4c-2.6 0-4.4 1.6-4.4 4.5V10.5H6.8v3H9.3V21h4.2z" />
    </svg>
  );
}

export function InstagramIcon({
  size = 17,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={cn(className)}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
