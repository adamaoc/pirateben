import Nav from "./Nav";
import Mobile from "./Mobile";

const Header = () => {
  return (
    <header className="flex items-center justify-end fixed top-0 left-0 right-0 z-50 p-4 pr-8">
      <Nav />
      <Mobile />
    </header>
  );
};

export default Header;
