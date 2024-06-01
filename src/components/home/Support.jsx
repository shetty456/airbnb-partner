import ScreenLayout from "../../layouts/ScreenLayout";
import Heading from "../ui/Heading";
import SupportCard from "../ui/SupportCard";

const supportdata = [
  {
    title: "Exposure to Hosts",
    content:
      "You'll be displayed on the experienced Co-Host page, where Hosts in your area can find your help. Get the details.",
  },
  {
    title: "Specialised tools",
    content:
      "Access a set of tools to help you manage your business your way. Receive a share of a booking’s payout*, co-create listings and message new Hosts directly.",
  },
  {
    title: "Resources and community",
    content:
      "Explore a series of educational resources on the tools you can use, and connect with an active community of experienced Co-Hosts who can help you get started.",
  },
];

const Support = () => {
  return (
    <section className="py-12">
      <ScreenLayout>
        <Heading
          title="Support to help you succeed"
          textSize={"medium"}
          fontWeight={"medium"}
        />
        <section className="grid grid-cols-1 md:grid-cols-3 gap-2 py-12">
          {supportdata.map((data, index) => (
            <SupportCard
              title={data.title}
              content={data.content}
              key={index}
            />
          ))}
        </section>
      </ScreenLayout>
    </section>
  );
};

export default Support;
