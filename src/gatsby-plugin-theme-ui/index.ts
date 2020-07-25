export default {
  breakpoints: ["40em", "56em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "'Playfair Display', serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 300,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.625,
    heading: 1.1,
  },
  text: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
  },
  zIndices: [0, 1, 2, 3, 5, 8, 13],
  colors: {
    text: "#5b5b5b",
    alphaBg: "rgba(64,83,27, 0.7)",
    background: "#efefef",
    primary: "#69ddffff",
    secondary: "#96cdffff",
    muted: "#d8e1ffff",
    dark: "#dbbaddff",
    light: "#be92a2ff",
    // primary: "#48d2dc",
    // secondary: "#d7f9f1",
    // muted: "#7aa095",
    // dark: "#40531b",
    // light: "#8f908f",
  },
  layout: {
    header: {
      color: "white",
      backgroundColor: "primary",
      position: "relative",
      mb: 3,
    },
    footer: {
      color: "white",
      backgroundColor: "black",
    },
    cartmobile: {
      position: "fixed",
      bg: "alphaBg",
      color: "background",
      top: 0,
      right: 0,
      p: 2,
      zIndex: 3,
    },
    cartdesktop: {
      position: "absolute",
      bg: "transparent",
      top: 3,
      right: 3,
    },
  },
  cards: {
    primary: {
      bg: "white",
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      bg: "background",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "body",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "secondary",
    },
    pre: {
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
}
