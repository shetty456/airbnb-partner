import ScreenLayout from "../../layouts/ScreenLayout";
import SubHeading from "../ui/SubHeading";

const Disclaimer = () => {
  return (
   <section className="py-12">
     <ScreenLayout>
      <SubHeading
        title="The Co-Host Services Platform enables Hosts to connect with experienced Co-Hosts who provide a variety of hosting services. This platform service is powered by Airbnb Living LLC, Airbnb Global Services Limited and Airbnb Plataforma Digital Ltda. It is currently available in France, Spain, Italy, the UK, Germany, Australia, Canada, Brazil, Mexico and the United States. The Luckey platform is offered by Luckey SAS."
        textSize={"small"}
        fontWeight={"light"}
      />
       <SubHeading
        title="* In many countries, you can share a part of each booking’s payout with your Co-Host through Airbnb. There are some limitations depending on your location and your Co-Host’s, or where your listing is located. Learn more."
        textSize={"small"}
        fontWeight={"light"}
      />
    </ScreenLayout>
   </section>
  );
};

export default Disclaimer;
