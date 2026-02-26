import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.08] dark:border-white/10 py-8 text-center">
      <p className="text-muted text-xs tracking-wide">
        &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </p>
    </footer>
  );
}
