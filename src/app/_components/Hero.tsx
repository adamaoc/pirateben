import { Youtube, Twitch } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-gaming-B5g-Nhzr.jpg"
          alt="Gaming Setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center items-center">
          <img
            src="/Pirate Ben Logo - Large.png"
            alt="Pirate Ben"
            className="w-60 h-60 invert"
          />
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-montserrat font-black text-foreground mb-6">
            Pirate <span className="text-primary">Ben</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-inter font-light text-muted-foreground mb-8 tracking-wide">
            Gamer. Reactor. Streamer.
          </p>

          {/* Description */}
          <p className="text-lg font-inter text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Welcome to my corner of the internet where gaming meets music,
            reactions meet authenticity, and every stream is an adventure worth
            joining.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.youtube.com/@pirateben2011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-w-[200px] h-14 px-6 py-3 text-xl font-medium border-2 border-primary text-primary bg-primary/10 rounded-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-glow"
            >
              <Youtube className="mr-3 h-6 w-6" />
              Watch on YouTube
            </a>

            <a
              href="https://www.twitch.tv/pirateben11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-w-[200px] h-14 px-6 py-3 text-xl font-medium border-2 border-purple-600 text-purple-600 bg-purple-500/10 rounded-md hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <Twitch className="mr-3 h-6 w-6" />
              Watch Live on Twitch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute md:bottom-8 bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
