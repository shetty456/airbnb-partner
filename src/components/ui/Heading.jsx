import PropTypes from "prop-types";

const Heading = ({ title, mainheading, textSize, textAlign, fontWeight }) => {
  console.log(textAlign);
  
  let sizeClassName = "";
  switch (textSize) {
    case "small":
      sizeClassName = "text-2xl md:text-3xl py-2 md:py-2";
      break;
    case "medium":
      sizeClassName = "text-2xl md:text-5xl py-2 md:py-2";
      break;
    case "large":
      sizeClassName = "text-3xl md:text-7xl py-2 md:py-5";
      break;
    default:
      sizeClassName = "text-3xl md:text-7xl py-2 md:py-5";
  }

  let fontWeightClassName = "";
  switch (fontWeight) {
    case "bold":
      fontWeightClassName = "font-bold";
      break;
    case "semibold":
      fontWeightClassName = "font-semibold";
      break;
    case "medium":
      fontWeightClassName = "font-medium";
      break;
    default:
      fontWeightClassName = "font-semibold";
  }

  const className = `${sizeClassName} ${fontWeightClassName} ${textAlign}`;
  if (mainheading) {
    return <h1 className={className}>{title}</h1>;
  } else {
    return <h2 className={className}>{title}</h2>;
  }
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  mainheading: PropTypes.bool,
  textSize: PropTypes.string,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default Heading;
