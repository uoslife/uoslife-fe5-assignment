import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      whitetext: string;
      contentback: string;
      footerBackground: string;
    };
    backgroundcolors:{
      scrollbutton:string;
      white: string;
      black: string;
      hover: string;
    }
    fontSize: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    fontWeight: {
      normal: string;
      medium: string;
      bold: string;
    };
    fontFamily: {
      systemUi: string;
      avenir: string;
      helvetica: string;
      arial: string;
      sansSerif: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      bar: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}

export const theme = {
  colors: {
    whitetext: "#fdfdfd",
    contentback: "#414141",
    footerBackground: "#36454F",
  },
  backgroundcolors:{
    scrollbutton:"#f5ded3",
    white: "#fdfdfd",
    black: "#000000",
    hover: "#646cffaa"
  },
  fontSize: {
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    xxl: "32px",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    bold: "700",
  },
  fontFamily: {
    systemUi: "system-ui",
    avenir: "Avenir",
    helvetica: "Helvetica",
    arial: "Arial",
    sansSerif: "sans-serif",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "40px",
    bar: "160px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
};
