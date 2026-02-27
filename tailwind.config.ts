import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Dark mode toggled by adding/removing the 'dark' class on <html>.
  // Dark is the default (added by the inline script in layout.tsx).
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // All values resolve to CSS variables defined in globals.css.
        // :root = light mode, .dark = dark mode (default).
        background:   "var(--color-bg)",
        surface:      "var(--color-surface)",
        card:         "var(--color-card)",
        "card-hover": "var(--color-card-hover)",
        accent:       "var(--color-accent)",
        glow:         "var(--color-glow)",
        "text-primary": "var(--color-text)",
        muted:        "var(--color-text-muted)",
        border:       "var(--color-border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
