function MyApp({ Component, pageProps }) {
  /*
    In the next.js world, everything JS/React related you want to be available
    for all the pages of the app should reside in this file.

    If you decide to style the app using a CSS-in-JS tool, this file
    is the place to configure said tool.

    This is also a good place to render a <Layout/> component
    in the case you want to have the same layout throughout the app.

    https://nextjs.org/docs/advanced-features/custom-app
  */
  return <Component {...pageProps} />;
}

export default MyApp;
