/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f2d600", //yellow
        secondary: "#ff5400", //orange
        tertiary: "#b8d100", //green
        quaternary: "#23ffff", //blue
        dark: "#1a1a1a", //black
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"],
        written: ["var(--font-gochi-hand)", "cursive"],
      },
      lineHeight: {
        tighter: "1.1",
        loose: "1.875",
      },

      fontSize: {
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.25rem",
        "5xl": "2.7rem",
        "6xl": "3.25rem",
        "7xl": "3.75rem",
        "8xl": "5rem",
        "9xl": "6rem",
      },

      height: {
        "30vw": "30vw",
      },

      borderRadius: {
        "4xl": "2.5rem",
        "5xl": "5rem",
      },

      width: {
        4.5: "1.125rem",
      },

      maxWidth: {
        prose: "65ch",
      },

      scale: {
        80: "0.8",
        135: "1.35",
      },

      rotate: {
        "-8": "-8deg",
        4: "4deg",
        8: "8deg",
      },

      animation: {
        ping: "ping 2.5s cubic-bezier(0, 0, 0.3, 1) infinite",
        "horizontal-bounce": "horizontal-bounce 1s infinite",
      },

      keyframes: {
        ping: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: 0,
          },
        },

        "horizontal-bounce": {
          "50%": {
            transform: "translateX(25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },

          "0%, 100%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
      },

      typography: (theme) => ({
        lg: {
          css: {
            h1: {
              fontSize: theme("fontSize.5xl"),
            },
            h2: {
              fontSize: theme("fontSize.4xl"),
            },
            h3: {
              fontSize: theme("fontSize.3xl"),
            },
          },
        },

        xl: {
          css: {
            h1: {
              fontSize: theme("fontSize.6xl"),
            },
            h2: {
              fontSize: theme("fontSize.5xl"),
            },
            h3: {
              fontSize: theme("fontSize.3xl"),
            },
          },
        },

        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.purple[800]"),
            "--tw-prose-headings": theme("colors.purple[900]"),
            "--tw-prose-lead": theme("colors.purple[900]"),
            "--tw-prose-links": theme("colors.purple[600]"),
            "--tw-prose-links-hover": theme("colors.purple[400]"),
            "--tw-prose-bold": theme("colors.purple[900]"),
            "--tw-prose-counters": theme("colors.purple[800]"),
            "--tw-prose-bullets": theme("colors.purple[800]"),
            "--tw-prose-hr": theme("colors.purple[50]"),
            "--tw-prose-quotes": theme("colors.purple[700]"),
            "--tw-prose-quote-borders": theme("colors.purple[600]"),
            "--tw-prose-captions": theme("colors.purple[800]"),
            "--tw-prose-code": theme("colors.purple[900]"),
            "--tw-prose-pre-code": theme("colors.purple[25]"),
            "--tw-prose-pre-bg": theme("colors.purple[900]"),
            "--tw-prose-th-borders": theme("colors.purple[100]"),
            "--tw-prose-td-borders": theme("colors.purple[100]"),
            "--tw-prose-invert-body": theme("colors.purple[25]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.white"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-links-hover": theme("colors.purple[300]"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.purple[25]"),
            "--tw-prose-invert-bullets": theme("colors.purple[100]"),
            "--tw-prose-invert-hr": theme("colors.purple[25]"),
            "--tw-prose-invert-quotes": theme("colors.white"),
            "--tw-prose-invert-quote-borders": theme("colors.purple[100]"),
            "--tw-prose-invert-captions": theme("colors.purple[50]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.white"),
            "--tw-prose-invert-pre-bg": theme("colors.purple[800]"),
            "--tw-prose-invert-th-borders": theme("colors.purple[50]"),
            "--tw-prose-invert-td-borders": theme("colors.purple[100]"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
