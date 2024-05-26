import SingleListItem from "./SingleListItem";

interface headerProps {
  pageName: string,
}

const Header: React.FC<headerProps> = ({pageName}) => {
  return (
    <header className="mt-4 mb-4">
      <div className={`container mx-auto hidden md:flex justify-between gap-3`}>
        <img src="../public/artisan_logo.png" alt="" />
        <ul className="flex items-center gap-8 relative">
          <SingleListItem active={pageName == "home"} name={"Home"}/>
          <SingleListItem active={pageName == "menu"} name={"Menu"}/>
          <SingleListItem active={pageName == "restaurant"} name={"Our Restaurant"}/>
          <SingleListItem active={pageName == "blog"} name={"Blog"}/>
        </ul>
        <div className="flex items-center gap-4 font-montserrat">
          <button className="bg-main font-semibold pt-2 pb-2 pl-8 pr-8 rounded-md h-10">Log In</button>
          <button className="bg-main font-semibold pt-2 pb-2 pl-4 pr-4 rounded-md h-10">
            <img src="../public/cart.svg" alt="" />
          </button>
        </div>
      </div>
    </header> 


    
  );
};

export default Header;
