/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#eee",
          "primary-focus": "#000",
          "primary-content": "#000",
          secondary: "#000",
          "secondary-focus": "#000",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#000",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#000",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
  },
};
