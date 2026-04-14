import NavLinkItem from "./NavLinkItem";

const NavbarLinks = () => {
  return (
    <nav>
      <ul>
        <NavLinkItem title="Our Story" path="/" />
        <NavLinkItem title="The Bakery" path="/bakery" />
        <NavLinkItem title="Events" path="/events" />
      </ul>
    </nav>
  );
};

export default NavbarLinks;
