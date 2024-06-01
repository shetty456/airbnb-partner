import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PropTypes from "prop-types";

const HomepageLayout = ({ children }) => {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

HomepageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomepageLayout;
