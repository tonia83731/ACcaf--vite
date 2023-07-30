// import { ReactComponent as HamburgerIcon } from "../assets/icon/nav_icon/hamburger.svg";
// import { ReactComponent as Delete } from "../assets/icon/nav_icon/delete.svg";
import { ReactComponent as UserIcon } from "../assets/icon/nav_icon/user.svg";
import { ReactComponent as WishIcon } from "../assets/icon/nav_icon/like_save.svg";
import { ReactComponent as BagIcon } from "../assets/icon/nav_icon/bag.svg";

import { ReactComponent as Logo } from "../assets/favicon.svg";

import BagList from "./Others/BagList";
import WishList from "./Others/WishList";

import { NavLink, Link } from "react-router-dom";

import useCartContext from "../hooks/useCartContext";

export default function Header({ onRemoveWishClick, onRemoveAllWishClick }) {
   const info = useCartContext();
   const state = info.state;
  //  const dispatch = info.dispatch;
  return (
    <header className="sticky top-0 left-0 h-[45px] leading-[45px] bg-olive-100 text-white-100 z-[1] tablet:h-[60px] tablet:leading-[60px]">
      <div className="grid gap-2 grid-cols-9 justify-center items-center h-full breakpoint:grid-cols-10">
        {/* Hamburger */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle hidden" />
        <label
          htmlFor="nav-toggle"
          className="nav-toggle-label text-2xl col-start-2 breakpoint:hidden"
        >
          &#9776;
        </label>
        {/* Logo */}
        <Link
          to="/"
          className="w-full flex justify-center items-center col-start-3 col-span-4 breakpoint:col-start-2 breakpoint:col-span-3"
        >
          <span className="logo-icon">
            <Logo />
          </span>
          <span className="font-bold text-2xl ml-2 title">AC Café</span>
        </Link>

        {/* Navbar */}
        <nav
          id="nav-list"
          className="bg-gold-60 w-full absolute top-[100%] text-center breakpoint:bg-transparent breakpoint:static breakpoint:scale-y-100 breakpoint:col-start-6 breakpoint:col-span-2"
        >
          <div
            className="nav-item flex flex-col breakpoint:grid breakpoint:gap-4 breakpoint:grid-cols-3"
            aria-labelledby="nav-toggle"
          >
            <NavLink to="/" className="justify-self-end">
              Home
            </NavLink>
            <NavLink to="/menu" className="justify-self-center">
              Menu
            </NavLink>
            <NavLink to="/news" className="justify-self-start">
              News
            </NavLink>
          </div>
        </nav>

        {/* Button Group */}
        <div className="w-full col-start-7 col-span-2 flex flex-wrap justify-end breakpoint:col-start-9 breakpoint:col-span-1">
          {/* <Link to="#" className="">
            <div className="nav-icon">
              <UserIcon />
            </div>
          </Link> */}
          {/* <div className="wish-dropdown">

          </div> */}

          <div className="wish-dropdown">
            <button type="button" className="mr-4">
              <div className="nav-icon">
                <WishIcon />
              </div>
            </button>
            <div
              id="wish-list"
              className="hidden absolute top-[100%] right-0 bg-white-100 drop-shadow-md text-olive-80 w-full px-2 py-4 breakpoint:w-1/4 breakpoint:min-w-[450px]"
            >
              <WishList
                onRemoveWishClick={onRemoveWishClick}
                onRemoveAllWishClick={onRemoveAllWishClick}
              />
            </div>
          </div>

          <div className="bag-dropdown">
            <button type="button" className="">
              <div className="nav-icon">
                <BagIcon />
              </div>
            </button>
            <div
              id="bag-list"
              className="hidden absolute top-[100%] right-0 bg-white-100 drop-shadow-md text-olive-80 w-full px-2 py-4 breakpoint:w-1/4 breakpoint:min-w-[450px]"
            >
              <BagList props={state} />
            </div>
          </div>
        </div>
        {/* Wish List */}
        {/* <div id="wish-list" className="">

        </div> */}

        {/* Bag List */}
        {/* <div id="bag-list" className="">
          <BagList />
        </div> */}
      </div>
    </header>
  );
}

{
  /* <div className="flex items-center">
        <span className="logo-icon hidden tablet:block">
          <Logo />
        </span>
        <span className="font-bold text-2xl title ml-2">AC Café</span>
      </div>
      <nav className="">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/news">News</NavLink>
      </nav> */
}
