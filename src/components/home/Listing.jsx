import ScreenLayout from "../../layouts/ScreenLayout";
import PartnerCard from "../ui/PartnerCard";

const Listing = () => {
  return (
    <section className="bg-neutral-100 py-6">
      <ScreenLayout>
        <PartnerCard
          imageurl={
            "https://a0.muscache.com/im/pictures/7a489143-28a7-49b2-b442-277351d9189c.jpg"
          }
          title={"Do you need help with your listing?"}
          content={
            "Whether you don’t have time, you’re far from your place or you’re unable to host in person, you can get support from an experienced Co-Host in your area. Connect with a Co-Host and start discussing how you’ll collaborate."
          }
          btntxt={"Find a Co-Host"}
          index={0}
        />
      </ScreenLayout>
    </section>
  );
};

export default Listing;
