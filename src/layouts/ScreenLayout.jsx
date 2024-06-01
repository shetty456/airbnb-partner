import PropTypes from "prop-types";

const ScreenLayout = ({ children }) => {
  return <section className="max-w-screen-xl mx-auto">{children}</section>;
};

ScreenLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenLayout;
