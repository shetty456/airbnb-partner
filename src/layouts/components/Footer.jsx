import ScreenLayout from "../ScreenLayout";

const content = [
  {
    mainHeading: "Support",
    contents: [
      "Help Centre",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
      "Report neighbourhood concern",
    ],
  },
  {
    mainHeading: "Hosting",
    contents: [
      "Airbnb your home",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
      "Join a free Hosting class",
    ],
  },
  {
    mainHeading: "Airbnb",
    contents: [
      "Newsroom",
      "New features",
      "Careers",
      "Investors",
      "Airbnb.org emergency stays",
    ],
  },
];

const Footer = () => {
  return (
    <section className="bg-neutral-100 py-6">
      <ScreenLayout>
        <section className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {content.map((data, index) => (
            <section key={index}>
              <p className="font-semibold text-sm py-2">{data.mainHeading}</p>
              {data.contents.map((cont, indx) => (
                <p key={indx} className="text-sm font-light py-2">{cont}</p>
              ))}
            </section>
          ))}
        </section>
        <section className="border-b-2 py-4"></section>
        <section className="py-4">
          <p>Some data...</p>
        </section>
      </ScreenLayout>
    </section>
  );
};

export default Footer;
