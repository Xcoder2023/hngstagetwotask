import React from "react";
import { Link } from "react-router-dom";
import {
  arrowdown,
  arrowdownG,
  brandlogo,
  downarroww,
  menu,
  rightarrow,
  tabler,
} from "../../assets/Index";
import NavMini from "./NavMini";
import HamburgerMenu from "./HamburgerMenu";

export const Nav = () => {
  return (
    <>
      <div className="hidden lg:block sticky top-0 bg-[#fff] z-10">
        <NavMini />
        <hr />
        <div className="flex justify-between w-[90%] m-auto items-center py-5">
          <button className="flex items-center justify-center gap-5 px-5 py-3 bg-[#7AC74F] rounded-lg text-[#fff] w-[303px]">
            <img src={tabler} alt="" />
            Browse all categories
            <img src={downarroww} alt="" />
          </button>
          <ul className="flex justify-between w-[520px] text-[#0a0b0a]">
            <li className="text-[#7AC74F] flex items-cente">
              Home <img src={arrowdownG} alt="" width={15} />
            </li>
            <li>Categories</li>
            <li>
              <Link to="/productList" title="click to see all our products" className="flex items-center">
                shop <img src={arrowdown} alt="" width={15} />
              </Link>
            </li>
             <Link to="/checkout" title="click to see the most popular products">Blog</Link>
            <li>Contact</li>
          </ul>
          <button title="click to register as a vendor" className="bg-[#d3ecc4] p-2 rounded-lg text-[#396520] flex items-center justify-center gap-1 w-[163px]">
            Become vendor <img src={rightarrow} alt="" />
          </button>
        </div>
      </div>



      <div className="sticky top-0 z-10 lg:hidden">
        <HamburgerMenu />
      </div>
    </>
  );
};
