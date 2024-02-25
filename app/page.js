import FeatureSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";
import ProductSection from "./sections/ProductSection";
import BlogSection from "./sections/BlogSection";
import CtaSection from "./sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <ProductSection></ProductSection>
      <BlogSection></BlogSection>
      <CtaSection></CtaSection>
    </>
  );
}
