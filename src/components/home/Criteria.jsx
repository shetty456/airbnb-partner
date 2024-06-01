import ScreenLayout from "../../layouts/ScreenLayout";
import SubHeading from "../ui/SubHeading";

const Criteria = () => {
  return (
    <section>
      <section className="bg-neutral-100 py-12">
        <ScreenLayout>
          <SubHeading
            title="To become an experienced Co-Host, you must meet minimum eligibility criteria."
            fontWeight={"light"}
            textSize={"medium"}
            textAlign={"text-center"}
          />
          <section className="text-center pt-4">
            <button className="btn">Learn more</button>
          </section>
        </ScreenLayout>
      </section>
      <section className="py-12">
        <ScreenLayout>
          <SubHeading
            title="Michael, experienced Co-Host in Paris"
            textSize={"small"}
            textAlign={"text-center"}
            fontWeight={"medium"}
          />
          <SubHeading
            title="“Since I became a Co-Host, I no longer feel alone in my work. I feel like I have the support and encouragement I need to grow my business and get out of my comfort zone.”"
            fontWeight={"light"}
            textSize={"medium"}
            textAlign={"text-center"}
          />
        </ScreenLayout>
      </section>
    </section>
  );
};

export default Criteria;
