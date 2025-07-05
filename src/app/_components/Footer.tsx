// import { Youtube, Twitch, Instagram, Twitter } from "lucide-react";
import { Youtube, Twitch } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Youtube,
      href: "https://www.youtube.com/@pirateben2011",
      label: "YouTube",
      color: "hover:text-red-500",
    },
    {
      icon: Twitch,
      href: "https://www.twitch.tv/pirateben11",
      label: "Twitch",
      color: "hover:text-purple-500",
    },
    // {
    //   icon: Instagram,
    //   href: "https://instagram.com/pirateben",
    //   label: "Instagram",
    //   color: "hover:text-pink-500",
    // },
    // {
    //   icon: Twitter,
    //   href: "https://twitter.com/pirateben",
    //   label: "Twitter",
    //   color: "hover:text-blue-500",
    // },
  ];

  // const footerLinks = [
  //   { label: "Privacy Policy", href: "#privacy" },
  //   { label: "Terms of Service", href: "#terms" },
  //   { label: "Contact", href: "#contact" },
  // ];

  return (
    <footer className="bg-background-secondary border-t border-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">
              Pirate <span className="text-primary">Ben</span>
            </h3>
            <p className="text-muted-foreground font-inter">
              Creating content worth watching
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground ${social.color} transition-colors duration-300 p-2 rounded-full hover:bg-card`}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Footer Links */}
          {/* <div className="flex justify-center md:justify-end space-x-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm"
              >
                {link.label}
              </a>
            ))}
          </div> */}
        </div>

        {/* Copyright */}
        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-inter text-sm">
            © 2025 Pirate Ben. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
