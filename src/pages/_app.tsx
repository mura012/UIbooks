import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "src/styles/globals.css";
import { FocusProvider } from "src/context/focusContext";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <FocusProvider>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </FocusProvider>
  );
};

export default App;
