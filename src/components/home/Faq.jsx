import ScreenLayout from "../../layouts/ScreenLayout";
import Heading from "../ui/Heading";
import IndividualFaq from "../ui/IndividualFaq";

const faqdata = [
    {
      question: "What are the eligibility criteria to become an experienced Co-Host?",
      answer: "Experienced Co-Hosts must be either Hosts or Co-Hosts who have hosted listings with an average guest rating of 4.8 or more and a less than 3% cancellation rate on at least 10 stays on Airbnb. The marketplace currently operates in France, Spain, Italy, Germany, the UK, Australia, Brazil, Canada, and the US. As it grows, it will welcome experienced Co-Hosts who are ready to bring hosting services to additional corners of the world."
    },
    {
      question: "Are there any legal requirements for becoming an experienced Co-Host?",
      answer: "Yes, as an experienced Co-Host, you must represent and warrant that you, and any employees or agents that work with you or on your behalf, have all the necessary permits, licenses, insurance, and/or qualifications required for your services. For example, providing property management services may require you to be a licensed property broker, and operating without a license may result in penalties for you and/or the Hosts you work with. It is advised to seek legal advice about how local laws apply before registering."
    },
    {
      question: "How much can I expect to earn as an experienced Co-Host?",
      answer: "Earnings will be agreed upon between you and your Host before you start. Many Co-Hosts choose to be paid either a percentage or a fixed amount for each booking."
    },
    {
      question: "How will I connect with new Hosts?",
      answer: "You will receive messages from Hosts in your Airbnb inbox. You can discuss the terms of your collaboration, agree on a price per booking, and finalize your agreement together. You are free to select which listings you want to manage and which Hosts you wish to work with."
    },
    {
      question: "How do I get started as an experienced Co-Host?",
      answer: "First, you’ll fill out a form. If you’re eligible, you’ll receive an invitation to complete your registration, fill out your profile, and set your proposed pricing. After that, Hosts looking for support in your area will be able to find you."
    }
  ];
  

const Faq = () => {
  return (
    <section className="py-4">
      <ScreenLayout>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <section className="pt-2">
          <Heading
            title="Frequently asked questions"
            textSize={"medium"}
            fontWeight={"medium"}
          />
          </section>
          <section>
            {faqdata.map((faq, index) => (
              <IndividualFaq
                question={faq.question}
                answer={faq.answer}
                key={index}
              />
            ))}
          </section>
        </section>
      </ScreenLayout>
    </section>
  );
};

export default Faq;
