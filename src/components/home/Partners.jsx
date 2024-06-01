import ScreenLayout from "../../layouts/ScreenLayout";
import PartnerCard from "../ui/PartnerCard";

const partnerdata = [
  {
    imageurl:
      "https://a0.muscache.com/im/pictures/4c35e3ac-e5a6-48e1-b22c-e686df78b283.jpg",
    title: "Develop your partnerships with Hosts",
    content:
      "By becoming an experienced Co-Host, you're allowing potential Hosts to contact you to learn about your services. You define the terms of your collaboration and determine your fee.",
  },

  {
    imageurl:
      "https://a0.muscache.com/im/pictures/fcd424d5-cce9-4168-af2c-b5c510be1cc1.jpg",
    title: "Help ensure Hosts’ and guests’ satisfaction",
    content:
      "Welcoming guests, cleaning, maintaining homes: whatever your scope of services, you can help create the best experience for both guests and the Hosts you support by making quality your top priority.",
  },
  {
    imageurl:
      "https://a0.muscache.com/im/pictures/cea30f70-f612-4abc-9792-6948a4679ecc.jpg",
    title: "Work independently at your own pace",
    content:
      "You decide what works best for you. Whatever your goals, our tools and the community of experienced Co-Hosts are there to help you achieve them.",
  },
];

const Partners = () => {
  return (
    <section>
      <ScreenLayout>
        {partnerdata.map((partner, index) => (
          <PartnerCard
            imageurl={partner.imageurl}
            title={partner.title}
            content={partner.content}
            key={index}
            index={index}
          />
        ))}
        {/* <PartnerCard
          imageurl="https://a0.muscache.com/im/pictures/4c35e3ac-e5a6-48e1-b22c-e686df78b283.jpg"
          title="Develop your partnerships with Hosts"
          content="By becoming an experienced Co-Host, you're allowing potential Hosts to contact you to learn about your services. You define the terms of your collaboration and determine your fee."
        /> */}
      </ScreenLayout>
    </section>
  );
};

export default Partners;
