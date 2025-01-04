// ---- Imports ----

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
