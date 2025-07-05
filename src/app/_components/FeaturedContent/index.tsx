import YouTube from "./YouTube";
import Twitch from "./Twitch";

const FeaturedContent = () => {
  return (
    <section id="featured" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
            Latest Content
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Catch up on the newest gaming sessions and music reactions
          </p>
        </div>

        {/* 2x2 Grid Layout for 4 Individual Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* 3 YouTube Video Cards */}
          <YouTube />

          {/* 1 Twitch Stream Card */}
          <Twitch />
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
