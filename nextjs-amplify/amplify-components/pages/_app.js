import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css";

import { ThemeProvider } from "@aws-amplify/ui-react";
import { theme } from "../hooks/useTheme";
import { Flex } from "@aws-amplify/ui-react";
import { View } from "@aws-amplify/ui-react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

// {
//   base: '0',
//   small: '480px',
//   medium: '768px',
//   large: '992px',
//   xl: '1280px',
//   xxl: '1536px',
// }

function MyApp({ Component, pageProps }) {
  return (
    <>
      <View
        border="2px solid blue"
        height="100vh"
        padding={{ base: 0, large: "1rem" }}
      >
        <ThemeProvider theme={theme}>
          <Flex
            direction={{ base: "column", medium: "row" }}
            padding="1rem"
            width="100%"
          >
            <Navbar />
            <Main>
              <Component {...pageProps} />
            </Main>
          </Flex>
        </ThemeProvider>
      </View>
    </>
  );
}

export default MyApp;
