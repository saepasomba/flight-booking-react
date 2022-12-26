import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "whitePrimary",
      },
    },
  },
  fonts: {
    heading: `'Unbounded', cursive`,
    body: `'Raleway', 'sans-serif'`,
  },
  colors: {
    whitePrimary: "#F9F5EB",
    whiteHue: {
      50: "#f9f5eb",
      100: "#ebe2c9",
      200: "#e0cea5",
      300: "#d4ba80",
      400: "#c8a75a",
      500: "#F9F5EB",
      600: "#876e33",
      700: "#604e25",
      800: "#3a2f17",
      900: "#141006",
    },
    bluePrimary: "#1C3879",
    blueHue: {
      50: "#eaeffe",
      100: "#c6ceec",
      200: "#a0addc",
      300: "#7b8cce",
      400: "#566bc1",
      500: "#3d52a8",
      600: "#304083",
      700: "#222e5e",
      800: "#131b39",
      900: "#040917",
    },
  },
});

export default theme;
