import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import Container from "../Container/Container";

const Layout = ({ children }) => (
  <div>
    <Header />
      {children}
    <Footer />
  </div>
);

export default Layout;
