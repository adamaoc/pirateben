// import { Button } from "@/components/ui/button";
import StatsGrid from "./StatsGrid";

const AboutPreview = () => {
  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-4">
              About <span className="text-primary">Pirate Ben</span>
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              The journey, the passion, the community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <div className="space-y-6">
              <div className="prose prose-lg text-foreground">
                <p className="text-lg font-inter leading-relaxed text-foreground/90 mb-6">
                  What started as a passion project in 2019 has grown into
                  something incredible. I&apos;m Ben, a content creator who
                  believes in authentic reactions, epic gaming moments, and
                  building genuine connections with viewers.
                </p>

                <p className="text-lg font-inter leading-relaxed text-foreground/90 mb-6">
                  From early-morning Twutch streams to discovering new music
                  with my community, every piece of content comes from a place
                  of genuine enthusiasm. My goal is simple: create content that
                  I&apos;d want to watch myself.
                </p>

                <p className="text-lg font-inter leading-relaxed text-foreground/90 mb-8">
                  When I&apos;m not gaming or reacting to music, you&apos;ll
                  find me connecting with the community on Twitch or writing
                  about the content creation journey on my blog.
                </p>
              </div>

              {/* <Button size="lg" className="font-montserrat shadow-glow">
                Learn More About My Journey
              </Button> */}
            </div>

            {/* Stats Grid */}
            <StatsGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
