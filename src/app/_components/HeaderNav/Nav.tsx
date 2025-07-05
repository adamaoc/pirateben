export default function Nav() {
  const navItems = [
    // { name: "Home", href: "#home" },
    { name: "Channels", href: "#channels" },
    // { name: "Twitch", href: "#twitch" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
  ];
  return (
    <nav className="hidden md:flex items-center space-x-8 bg-background/75 backdrop-blur-sm border-b border-muted px-8 py-4 rounded-lg shadow-[6px_0px_0px_hsl(var(--primary))] ixed top-0 left-0 right-0 z-50">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-foreground hover:text-primary transition-smooth font-inter font-medium"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
