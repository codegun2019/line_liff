import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: {
          50: "#EFFDF5",
          100: "#D9FBE8",
          200: "#B3F5D1",
          300: "#75EDAE",
          400: "#00DC82",
          500: "#00C16A",
          600: "#00A155",
          700: "#007F45",
          800: "#016538",
          900: "#0A5331",
          950: "#052e16",
        },
        mandy: {
          "50": "#fef2f3",
          "100": "#fde6e7",
          "200": "#fbd0d5",
          "300": "#f7aab2",
          "400": "#f27a8a",
          "500": "#ea546c",
          "600": "#d5294d",
          "700": "#b31d3f",
          "800": "#961b3c",
          "900": "#811a39",
          "950": "#48091a",
        },
      },
    },
  },
};
