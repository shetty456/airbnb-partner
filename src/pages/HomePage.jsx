import Criteria from "../components/home/Criteria";
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
    </HomepageLayout>
  );
};

export default HomePage;
