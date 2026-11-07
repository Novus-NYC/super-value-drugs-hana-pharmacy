import type { Config } from "tailwindcss";

/**
 * Brand tokens taken from the storefront at 29-26 Union Street:
 * the deep green awning, the bright teal-green window trim, the cream brick
 * and the orange of "DRUGS" and the 약 window signs.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        canvas: "#F7F3EA",
        surface: "#FFFFFF",
        cream: {
          DEFAULT: "#F7F3EA",
          deep: "#EBE3D0",
        },
        green: {
          50: "#EEF6F1",
          100: "#D9EDE3",
          200: "#B5DBC8",
          600: "#1E8364",
          700: "#176A51",
          800: "#135A44",
          900: "#0F4D3A",
          950: "#093226",
        },
        teal: {
          DEFAULT: "#2DB38E",
          light: "#8FDCC3",
        },
        // Orange roles (WCAG ratios in BUILD_NOTES.md):
        // DEFAULT is the awning orange for large display text and shapes only;
        // deep is the filled-button background under white text (5.08:1);
        // hover is its hover state; text is the orange for small text on
        // canvas, cream-deep, white and orange-soft (at least 5.08:1).
        orange: {
          DEFAULT: "#E8541E",
          deep: "#C4420F",
          hover: "#9E3509",
          text: "#A8380C",
          soft: "#FBE7DC",
        },
        ink: "#15211B",
        muted: "#4E5D56",
        line: "#D8D1C1",
      },
      fontFamily: {
        sans: [
          '"Source Sans 3 Variable"',
          '"Noto Sans KR Variable"',
          "system-ui",
          "sans-serif",
        ],
        ko: [
          '"Noto Sans KR Variable"',
          '"Source Sans 3 Variable"',
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1.5" }],
        sm: ["1rem", { lineHeight: "1.55" }],
        base: ["1.125rem", { lineHeight: "1.65" }],
        lg: ["1.25rem", { lineHeight: "1.6" }],
        xl: ["1.375rem", { lineHeight: "1.5" }],
        "2xl": ["1.625rem", { lineHeight: "1.35" }],
        "3xl": ["2rem", { lineHeight: "1.25" }],
        "4xl": ["2.5rem", { lineHeight: "1.15" }],
        "5xl": ["3.25rem", { lineHeight: "1.08" }],
        "6xl": ["4.25rem", { lineHeight: "1.02" }],
      },
      maxWidth: {
        site: "76rem",
        prose: "40rem",
      },
      spacing: {
        header: "4.5rem",
        callbar: "4.75rem",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
