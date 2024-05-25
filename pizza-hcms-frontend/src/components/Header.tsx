const Header = () => {
  let prova:string = "hidden"
  return (
    <header>
      <div className={`container mx-auto flex md:${prova}`}>
        <img src="" alt="" />
        <ul className="flex">
          <li>Home</li>
          <li>Menu</li>
          <li>Our Restaurant</li>
          <li>Blog</li>
        </ul>
        <button>Log In</button>
        <button>Cart</button>
      </div>
    </header>
    
  );
};

export default Header;
