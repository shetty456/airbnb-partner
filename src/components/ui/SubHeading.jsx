import PropTypes from "prop-types";

const SubHeading = ({ title, textSize, textAlign, fontWeight }) => {
  let sizeClassName = "";
  switch (textSize) {
    case "small":
      sizeClassName = "text-xs md:text-sm py-2 md:py-2";
      break;
    case "medium":
      sizeClassName = "text-lg md:text-xl py-2 md:py-2";
      break;
    case "large":
      sizeClassName = "text-base md:text-2xl py-2 md:py-2";
      break;
    default:
      sizeClassName = "text-base md:text-lg py-2 md:py-2";
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
    case "normal":
      fontWeightClassName = "font-normal";
      break;
    case "light":
      fontWeightClassName = "font-light";
      break;
    default:
      fontWeightClassName = "font-semibold";
  }

  const className = `${sizeClassName} ${fontWeightClassName} ${textAlign}`;

  return <p className={className}>{title}</p>;
};

SubHeading.propTypes = {
  title: PropTypes.string.isRequired,
  textSize: PropTypes.string,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default SubHeading;
