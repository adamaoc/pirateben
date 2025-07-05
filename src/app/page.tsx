import FeaturedContent from "./_components/FeaturedContent";
import ChannelNavigation from "./_components/ChannelNavigation";
import AboutPreview from "./_components/AboutPreview";
import BlogPreview from "./_components/BlogPreview";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import HeaderNav from "./_components/HeaderNav";

export default function Home() {
  return (
    <div>
      <HeaderNav />
      <Hero />
      <FeaturedContent />
      <ChannelNavigation />
      <AboutPreview />
      <BlogPreview />
      <Footer />
    </div>
  );
}
