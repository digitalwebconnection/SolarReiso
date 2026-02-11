import SolarCalculator from "./CalculateSolarHm"
import HeroSection from "./Herosection"
import Scroll from "./Scroll"
import SolarAboutSection from "./SolarAboutSection"
import SolarFAQ from "./SolarFAQ"
import SolarServicesSection from "./SolarServicesSection"
import SolarStatsSection from "./SolarStatsSection"
import SolarTestimonials from "./SolarTestimonials"
import WhyChooseSection from "./WhyChooseSection"

const HomeMain = () => {
    return (
        <>
            <HeroSection />
            <SolarAboutSection/>
            <SolarCalculator />
          <SolarStatsSection/>
            <WhyChooseSection />
            <SolarServicesSection />
              <Scroll />
            <SolarTestimonials />
            <SolarFAQ />
        </>
    )
}

export default HomeMain
