import { wrapper } from "../redux/store";
import "../styles/global.scss";
import "../styles/slicks.scss";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import store from "./../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
