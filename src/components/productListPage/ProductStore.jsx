import React,{useEffect} from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import { useCart } from "../../CartContext";
import {
  applefruits,
  banana,
  berry,
  carbages,
  celeryveg,
  chobani,
  cucumber,
  egg,
  eggplants,
  fill,
  freshtomatoes,
  grape,
  grape2,
  hamimix,
  honeyjar,
  kalegreen,
  lemon,
  mellon,
  oliveoil,
  pinaple,
  redchili,
  rice,
  search,
  shoppingcart,
  soyamilk,
  spinach,
  sprout,
  squash,
  watermellon,
} from "../../assets/Index";

const ProductStore = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  const { incrementCart } = useCart();
  return (
    <>
      <div
        className="w-[90%] m-auto flex flex-col gap-5 my-5"
        style={{ fontFamily: "poppins" }}
      >
        <div className="hidden lg:flex justify-between items-center mx-auto w-full my-5">
          <ul className="text-[#5a5555] flex justify-between w-[60%]">
            <li className="text-[#589c32] ">All Products</li>
            <li>Vegetables</li>
            <li>Fruits</li>
            <li>Organic</li>
            <li>Packaged</li>
          </ul>
          <div className="flex justify-between items-center w-[10%]">
            <div>
              <img src={search} alt="" />
            </div>
            <div>
              <img src={fill} alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:flex md:grid md:grid-cols-2 w-full gap-5">
          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative md:bottom-9 bottom-9">
              12%
            </p>
            <div className="flex flex-col items-center gap-2">
              <img src={kalegreen} alt="" width={171} />
              <p className="font-semibold text-[18px]  text-[#0a0b0a]">
                Fresh Kale Greens
              </p>
              <p className="text-[#488129]">₦2000</p>
              <p className="text-[#9f9c9c] line-through">₦3500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-down" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <div className="flex justify-end">
              <p className="w-[14%] bg-[#F4D03F] font-bold text-[#0a0b0a] flex justify-center p-1 rounded-tr-lg relative bottom-12">
                New
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={hamimix} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Sweet Bell Hami Mix
              </p>
              <p className="text-[#488129]">₦4000</p>
              <p className="text-[#9f9c9c] line-through">₦7000</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] w-full h-[399px] rounded-2xl flex flex-col justify-center">
            <div className="flex justify-end">
              <p className="w-[14%] font-bold bg-[#F4D03F] flex justify-center p-1 rounded-tr-lg relative bottom-11">
                New
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={oliveoil} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Herb Infused Olive Oil
              </p>
              <p className="text-[#488129]">₦7000</p>
              <p className="text-[#9f9c9c] line-through">₦10000</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-down" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative bottom-14">
              10%
            </p>
            <div className="flex flex-col items-center">
              <img src={freshtomatoes} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Farm-Fresh Tomatoes
              </p>
              <p className="text-[#488129]">₦2000</p>
              <p className="text-[#9f9c9c] line-through">₦3500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="flex flex-col lg:flex lg:flex-row md:grid md:grid-cols-2 w-full gap-5">
          <div className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <div className="flex flex-col items-center">
              <img src={squash} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Organic Baby Spinach
              </p>
              <p className="text-[#488129]">₦5000</p>
              <p className="text-[#9f9c9c] line-through">₦7000</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-down" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative bottom-8">
              12%
            </p>
            <div className="flex flex-col items-center">
              <img src={sprout} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Organic Baby Spinach
              </p>
              <p className="text-[#488129]">₦5000</p>
              <p className="text-[#9f9c9c] line-through">₦7000</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative  bottom-14">
              12%
            </p>
            <div className="flex flex-col items-center">
              <img src={eggplants} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Garden Fresh eggplants
              </p>
              <p className="text-[#488129]">₦5000</p>
              <p className="text-[#9f9c9c] line-through">₦7000</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-down" className="bg-[#fafafa] lg:w-[25%] w-full h-[399px] rounded-2xl flex flex-col justify-center">
            <div className="flex justify-end">
              <p className="w-[14%] font-bold bg-[#F4D03F] flex justify-center p-1 rounded-tr-lg relative bottom-14 md:bottom-[3.556em]">
                New
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={grape} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Fresh grape
              </p>
              <p className="text-[#488129]">₦7000</p>
              <p className="text-[#9f9c9c] line-through">₦10000</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>
        </div>

        {/* second batch */}

        <div className="flex flex-col lg:flex-row lg:flex md:grid md:grid-cols-2 w-full gap-5">
          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative bottom-8">
              12%
            </p>
            <div className="flex flex-col items-center">
              <img src={sprout} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Organic Baby Spinach
              </p>
              <p className="text-[#488129]">₦5000</p>
              <p className="text-[#9f9c9c] line-through">₦7000</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-down" className="bg-[#fafafa] lg:w-[25%] w-full h-[399px] rounded-2xl flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <img src={watermellon} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Farm-Fresh watermelon
              </p>
              <p className="text-[#488129]">₦7000</p>
              <p className="text-[#9f9c9c] line-through">₦10000</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <div className="flex justify-end">
              <p className="w-[14%] font-bold bg-[#F4D03F] flex justify-center p-1 rounded-tr-lg relative bottom-14">
                New
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={mellon} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Cantaloupe melon
              </p>
              <p className="text-[#488129]">₦4000</p>
              <p className="text-[#9f9c9c] line-through">₦7000</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-down" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative bottom-12">
              12%
            </p>
            <div className="flex flex-col items-center">
              <img src={chobani} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Chobani Greek cuisine
              </p>
              <p className="text-[#488129]">₦750</p>
              <p className="text-[#9f9c9c] line-through">₦1500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:flex md:grid md:grid-cols-2 w-full gap-5">
          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative md:bottom-6 bottom-9">
              12%
            </p>
            <div className="flex flex-col items-center gap-2">
              <img src={egg} alt="" width={171} />
              <p className="font-semibold text-[18px]  text-[#0a0b0a]">
                Chinese steamed eggs
              </p>
              <p className="text-[#488129]">₦7000 (24 eggs) </p>
              <p className="text-[#9f9c9c] line-through">₦9500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-down" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <div className="flex">
              <p className="w-[14%] bg-[#67b83a] text-[#ffff] flex justify-center p-1 rounded-tl-lg relative bottom-11">
                12
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={honeyjar} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Fresh Honey Jar
              </p>
              <p className="text-[#488129]">₦2000</p>
              <p className="text-[#9f9c9c] line-through">₦3500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] w-full h-[399px] rounded-2xl flex flex-col justify-center">
            <div className="flex">
              <p className="w-[14%] bg-[#67b83a] text-[#ffff] flex justify-center p-1 rounded-tl-lg relative bottom-14">
                12
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={banana} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Healthy yellow banana
              </p>
              <p className="text-[#488129]">₦2000</p>
              <p className="text-[#9f9c9c] line-through">₦3500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-down" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative bottom-10">
              12%
            </p>
            <div className="flex flex-col items-center">
              <img src={pinaple} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Fresh Pineapple
              </p>
              <p className="text-[#488129]">₦3000</p>
              <p className="text-[#9f9c9c] line-through">₦3500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:flex md:grid md:grid-cols-2 w-full gap-5">
          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative md:bottom-10 bottom-9">
              6%
            </p>
            <div className="flex flex-col items-center gap-2">
              <img src={soyamilk} alt="" width={171} />
              <p className="font-semibold text-[18px]  text-[#0a0b0a]">
                Non-fat Soya Milk
              </p>
              <p className="text-[#488129]">₦2000</p>
              <p className="text-[#9f9c9c] line-through">₦2500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-down" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <div className="flex text-[#ffff]">
              <p className="w-[14%] bg-[#67b83a] flex justify-center p-1 rounded-tl-lg relative bottom-12">
                2%
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={applefruits} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                honeycrisp apples
              </p>
              <p className="text-[#488129]">₦2000</p>
              <p className="text-[#9f9c9c] line-through">₦3500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] w-full h-[399px] rounded-2xl flex flex-col justify-center">
            <div className="flex text-[#ffff]">
              <p className="w-[14%] bg-[#67b83a] flex justify-center p-1 rounded-tl-lg relative bottom-11">
                12%
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={spinach} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Smoothie Spinach Leaf
              </p>
              <p className="text-[#488129]">₦700</p>
              <p className="text-[#9f9c9c] line-through">₦1000</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-down" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative bottom-10">
              12%
            </p>
            <div className="flex flex-col items-center">
              <img src={celeryveg} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Celery Vegetable
              </p>
              <p className="text-[#488129]">₦200</p>
              <p className="text-[#9f9c9c] line-through">₦1000</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:flex md:grid md:grid-cols-2 w-full gap-5">
          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative md:bottom-11 bottom-9">
              7%
            </p>
            <div className="flex flex-col items-center gap-2">
              <img src={carbages} alt="" width={171} />
              <p className="font-semibold text-[18px]  text-[#0a0b0a]">
                Cabbage Cauliflower
              </p>
              <p className="text-[#488129]">₦2000</p>
              <p className="text-[#9f9c9c] line-through">₦3500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <div  className="flex text-[#ffff]">
              <p className="w-[14%] bg-[#67b83a] flex justify-center p-1 rounded-tl-lg relative bottom-[3.7em]">
                12%
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={redchili} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                 Peperoncino Chili
              </p>
              <p className="text-[#488129]">₦2000</p>
              <p className="text-[#9f9c9c] line-through">₦3500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-down" className="bg-[#fafafa] lg:w-[25%] w-full h-[399px] rounded-2xl flex flex-col justify-center">
            <div className="flex text-[#ffff]">
              <p className="w-[14%] bg-[#67b83a] flex justify-center p-1 rounded-tl-lg relative bottom-[3.4em]">
                New
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={cucumber} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Cucumber
              </p>
              <p className="text-[#488129]">₦1000</p>
              <p className="text-[#9f9c9c] line-through">₦2500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <div className="flex text-[#ffff]">
              <p className="w-[14%] bg-[#67b83a] flex justify-center p-1 rounded-tl-lg relative bottom-14">
                5%
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={mellon} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Cantaloupe melon
              </p>
              <p className="text-[#488129]">₦4000</p>
              <p className="text-[#9f9c9c] line-through">₦7000</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:flex md:grid md:grid-cols-2 w-full gap-5">
          <div data-aos="fade-down" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative md:bottom-8 bottom-9">
              4%
            </p>
            <div className="flex flex-col items-center gap-2">
              <img src={lemon} alt="" width={171} />
              <p className="font-semibold text-[18px]  text-[#0a0b0a]">
                Fresh  Lemon
              </p>
              <p className="text-[#488129]">₦800</p>
              <p className="text-[#9f9c9c] line-through">₦1500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <div className="flex text-[#ffff]">
              <p className="w-[14%] bg-[#67b83a] flex justify-center p-1 rounded-tr-lg relative bottom-[4.5em]">
                13%
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={berry} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                Smoothie berry
              </p>
              <p className="text-[#488129]">₦2000</p>
              <p className="text-[#9f9c9c] line-through">₦3500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-down" className="bg-[#fafafa] lg:w-[25%] w-full h-[399px] rounded-2xl flex flex-col justify-center">
            <div className="flex text-[#ffff]">
              <p className="w-[14%] bg-[#67b83a] flex justify-center p-1 rounded-tl-lg relative bottom-9">
                9%
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={grape2} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">Grapes</p>
              <p className="text-[#488129]">₦2000</p>
              <p className="text-[#9f9c9c] line-through">₦2500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>

          <div data-aos="fade-up" className="bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-2xl flex flex-col justify-center">
            <p className="bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative bottom-12">
              10%
            </p>
            <div className="flex flex-col items-center">
              <img src={rice} alt="" />
              <p className="font-semibold text-[18px] text-[#0a0b0a]">
                White rice Cereal
              </p>
              <p className="text-[#488129]">₦7000</p>
              <p className="text-[#9f9c9c] line-through">₦8500</p>
              <button
                onClick={incrementCart}
                title="click to add to your cart"
                className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center"
              >
                <img src={shoppingcart} alt="" />
                add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductStore;
