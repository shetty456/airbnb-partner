import { useState } from "react";
import PropTypes from "prop-types";

const IndividualFaq = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-6 bg-white text-left border-b">
      <h2
        className="flex justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="text-lg md:text-2xl font-extralight">{question}</div>
        {open ? (
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        ) : (
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        )}
      </h2>

      {open && <div className="pt-4 text-base md:text-lg font-extralight">{answer}</div>}
    </section>
  );
};

IndividualFaq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default IndividualFaq;
