import { theme } from "@/public/theme";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <title>Abacus</title>
          </Head>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </I18nextProvider>
  );
}
