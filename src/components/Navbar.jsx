function Navbar() {
  return (
    <nav className="container flex justify-between p-5 text-text-light">
      <div>
        <div>LOGO</div>
      </div>
      <div>
        <ul className="flex gap-[60px]">
          <li>Home</li>
          <li>Favorites</li>
          <li>Videos</li>
          <li>About Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
