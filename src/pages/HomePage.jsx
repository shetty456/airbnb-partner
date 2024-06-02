import Criteria from "../components/home/Criteria";
import Disclaimer from "../components/home/Disclaimer";
import Faq from "../components/home/Faq";
import Hero from "../components/home/Hero";
import Listing from "../components/home/Listing";
import Partners from "../components/home/Partners";
import Support from "../components/home/Support";
import HomepageLayout from "../layouts/HomepageLayout";

const HomePage = () => {
  return (
    <HomepageLayout>
      <Hero />
      <Partners />
      <Criteria />
      <Support />
      <Listing />
      <Faq />
      <Disclaimer />
    </HomepageLayout>
  );
};

export default HomePage;
