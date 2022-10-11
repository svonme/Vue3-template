/**
 * @file wind css
 */

import {defineConfig} from "vite-plugin-windicss";
import colors from "windicss/colors";
import formsPlugin from "windicss/plugin/forms";
import typography from "windicss/plugin/typography";

export default defineConfig({
  important: false,
  darkMode: "class",
  plugins: [
    formsPlugin,
    typography(),
  ],
  theme: {
    extend: {
      colors: {
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "inherit",
            a: {
              "color": "inherit",
              "opacity": 0.75,
              "fontWeight": "500",
              "textDecoration": "underline",
              "&:hover": {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: {color: "inherit"},
            strong: {color: "inherit"},
            em: {color: "inherit"},
            h1: {color: "inherit"},
            h2: {color: "inherit"},
            h3: {color: "inherit"},
            h4: {color: "inherit"},
            code: {color: "inherit"},
          },
        },
      },
    },
  },
});
