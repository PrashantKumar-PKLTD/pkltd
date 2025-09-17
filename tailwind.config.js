module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-light-dark-scheme": "var(--dark-light-dark-scheme)",
        darkbasic: "var(--darkbasic)",
        darklighter: "var(--darklighter)",
        greygrey: "var(--greygrey)",
        white: "var(--white)",
        "x-color-black-15": "var(--x-color-black-15)",
        "x-color-black-50": "var(--x-color-black-50)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "action-base": "var(--action-base-font-family)",
        "action-small": "var(--action-small-font-family)",
        "body-base": "var(--body-base-font-family)",
        "body-large": "var(--body-large-font-family)",
        "body-medium": "var(--body-medium-font-family)",
        "body-small": "var(--body-small-font-family)",
        "body-xsmall": "var(--body-xsmall-font-family)",
        "caption-base": "var(--caption-base-font-family)",
        "caption-medium": "var(--caption-medium-font-family)",
        "components-counter": "var(--components-counter-font-family)",
        "h4-header-blog-mod": "var(--h4-header-blog-mod-font-family)",
        "title-h4": "var(--title-h4-font-family)",
        "title-h5": "var(--title-h5-font-family)",
        "title-h6": "var(--title-h6-font-family)",
        "title-subtitle": "var(--title-subtitle-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "button-inner-shadow": "var(--button-inner-shadow)",
        "outline-shadow-animation": "var(--outline-shadow-animation)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
