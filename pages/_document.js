import Document, { Html, Head, Main, NextScript } from "next/document";
import Layout from "../components/Layout/Layout";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* <link
                        href="https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap"
                        rel="stylesheet"
                    /> */}
                    {/* ДОБАВИТЬ ШРИФТ SEGOE UI */}
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
