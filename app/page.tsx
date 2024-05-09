
import Carousel from "./components/Carousel";
import DiscoverSection from "./components/DiscoverSection";
import ItemsSection from "./components/ItemsSection";
import StepsSection from "./components/StepsSection";
import Features from "./components/Features";


export default function Home() {
  return (
   <div>
   <Carousel/>
   <DiscoverSection/>
   <StepsSection/>
   <ItemsSection/>
   <Features/>
   </div>
  );
}
