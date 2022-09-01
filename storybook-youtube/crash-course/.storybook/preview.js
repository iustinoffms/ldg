import { ChakraProvider } from "@chakra-ui/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
// export const decorators = [
// //   (Story) => <ChakraProvider>{Story()}</ChakraProvider>,
// // ];

export const globalPadding = (Story) => (
  <div style={{ border: "1px solid red", padding: "2rem" }}>{Story()}</div>
);

export const decorators = [globalPadding];
