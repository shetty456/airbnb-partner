import ScreenLayout from "../../layouts/ScreenLayout";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";

const Hero = () => {
  return (
    <ScreenLayout>
      <section className="py-12">
        <Heading
          title="Earn by helping local Hosts"
          mainheading
          fontWeight={"bold"}
          textAlign={"text-center"}
        />
        <SubHeading
          title="Many Hosts want an experienced Co-Host to help them with hosting. From cleaning to managing guests, partner with local Hosts to grow your earning potential on your own terms."
          textSize={"large"}
          fontWeight={"light"}
          textAlign={"text-center"}
        />
        <section className="text-center">
          <button className="btn">Become and experienced Co-Host</button>
        </section>
      </section>
      <img
        src="https://a0.muscache.com/im/pictures/61515d98-08b6-4147-ba06-527f1fd5b943.jpg"
        className="w-full h-[85vh] object-cover rounded-lg"
      />
    </ScreenLayout>
  );
};

export default Hero;
