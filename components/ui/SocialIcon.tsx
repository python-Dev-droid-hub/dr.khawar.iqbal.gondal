import { cn } from "@/lib/utils";

type SocialNetwork = "facebook" | "instagram" | "linkedin";

type SocialIconProps = {
  network: SocialNetwork;
  className?: string;
};

const paths: Record<SocialNetwork, React.ReactNode> = {
  facebook: (
    <path d="M14 8h-2.2V6.6c0-.6.1-1 .9-1H14V3.1S13.2 3 12.3 3c-2 0-3.3 1.2-3.3 3.5V8H7v2.8h2v7.2h2.8v-7.2H14L14.5 8H14z" />
  ),
  instagram: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.4" cy="7.6" r="1" fill="currentColor" />
    </>
  ),
  linkedin: (
    <path d="M7.2 9.5H4.8V19h2.4V9.5zM6 4.8a1.4 1.4 0 100 2.8A1.4 1.4 0 006 4.8zM19.2 12.4c0-2.2-1.2-3.6-3.4-3.6-1.1 0-1.9.5-2.3 1.2h-.1V9.5H11v9.5h2.4v-5.1c0-1.3.7-2.1 1.8-2.1 1 0 1.5.7 1.5 2.1V19h2.5v-6.6z" />
  ),
};

export default function SocialIcon({ network, className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-4 w-4 fill-current", className)}
      aria-hidden
    >
      {paths[network]}
    </svg>
  );
}
