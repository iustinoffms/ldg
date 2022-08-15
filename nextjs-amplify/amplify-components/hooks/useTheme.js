import { createTheme } from "@aws-amplify/ui-react";

export const theme = createTheme({
  name: "base-brand-theme",
  tokens: {
    // components: {
    //   button: {
    //     primary: {
    //       backgroundColor: { value: "blue" },
    //     },
    //   },
    // },
    colors: {
      font: {
        primary: { value: "green" },
        secondary: { value: "yellow" },
        tertiary: { value: "purple" },
        error: { value: "red" },
        success: { value: "blue" },
      },
      background: {
        primary: { value: "orange" },
      },
    },
  },
});
