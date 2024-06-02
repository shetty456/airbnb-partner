import PropTypes from "prop-types";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const PartnerCard = ({ imageurl, title, content, btntxt, index }) => {
  // todo: fix space-between issue
  return (
    <section className="grid grid-cols-1 gap-2 py-4 md:grid-cols-2 md:py-8">
      <section className={`flex items-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
        <img src={imageurl} className="rounded-lg object-cover w-full md:h-[70vh] md:w-10/12"/>
      </section>
      <section className={`flex flex-col justify-center ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
        <Heading title={title} textSize={"small"} />
        <SubHeading title={content} fontWeight={"light"} />
        {btntxt && <button className="btn w-fit">{btntxt}</button>}
      </section>
    </section>
  );
};

PartnerCard.propTypes = {
  imageurl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  btntxt: PropTypes.string,
  index: PropTypes.number.isRequired,
};

export default PartnerCard;
