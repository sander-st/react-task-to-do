/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "linear-violet-blu":
          "linear-gradient(123deg, #34308F 0%, #8166E9 100%)",
      },
      boxShadow: {
        top: "0px -6px 4px 0px rgba(0, 0, 0, 0.25)",
        right: "6px 1px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        "gray-bg-sec": "#D9D9D9",
        "gray-bg-pri": "#EAEAEA",
        violetColor: "#8166E9",
      },
    },
  },
  plugins: [],
};
