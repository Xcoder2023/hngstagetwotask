import React,{useEffect} from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import { crisp, freshtomatoes, hamimix, kalegreen, oliveoil, shoppingcart, sprout, squash, yums } from '../../assets/Index'
import { useCart } from '../../CartContext';

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  const { incrementCart } = useCart();
  return (
    <>
      <div className='w-[90%] m-auto flex flex-col gap-5 my-5 overflow-hidden'style={{fontFamily:"poppins"}}>
        <p className="font-bold text-[28px] text-[#488129] text-center">Popular Product</p>
        <ul className='text-[#5a5555] flex justify-between items-center md:w-[55%] w-full m-auto'>
          <li className='text-[#589c32] '>All</li>
          <li>Featured</li>
          <li>Deal</li>
          <li>New</li>
          <li>On sale</li>
        </ul>
        <div className='flex flex-col lg:flex-row lg:flex md:grid md:grid-cols-2 w-full gap-5'>
          <div data-aos="fade-up" className='bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-md flex flex-col justify-center'>
            <p className='bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative md:bottom-14 bottom-9'>12%</p>
            <div className='flex flex-col items-center gap-2'>
              <img src={kalegreen} alt="" width={171}/>
              <p className='font-semibold text-[18px]  text-[#0a0b0a]'>Fresh Kale Greens</p>
              <p className='text-[#488129]'>₦2000</p>
              <p className='text-[#9f9c9c] line-through'>₦3500</p>
              <button onClick={incrementCart} title='click to add to your cart' className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center hover:bg-[#2a4a18]">
              <img src={shoppingcart} alt="" />
              add
            </button>
            </div>
          </div>

          <div data-aos="fade-down" className='bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-md flex flex-col justify-center'>
          <p className='bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative bottom-8'>12%</p>
            <div className='flex flex-col items-center'>
              <img src={sprout} alt="" />
              <p className='font-semibold text-[18px] text-[#0a0b0a]'>Organic Baby Spinach</p>
              <p className='text-[#488129]'>₦5000</p>
              <p className='text-[#9f9c9c] line-through'>₦7000</p>
              <button onClick={incrementCart} title='click to add to your cart' className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center hover:bg-[#2a4a18]">
              <img src={shoppingcart} alt="" />
              add
            </button>
            </div>
          </div>

          <div data-aos="fade-up" className='bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-md flex flex-col justify-center'>
          <div className='flex justify-end'>
            <p className='w-[14%] bg-[#F4D03F] flex justify-center p-1 rounded-tr-lg relative bottom-12'>New</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={hamimix} alt="" />
              <p className='font-semibold text-[18px] text-[#0a0b0a]'>Sweet Bell Hami Mix</p>
              <p className='text-[#488129]'>₦4000</p>
              <p className='text-[#9f9c9c] line-through'>₦7000</p>
              <button onClick={incrementCart} title='click to add to your cart' className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center hover:bg-[#2a4a18]">
              <img src={shoppingcart} alt="" />
              add
            </button>
            </div>
          </div>

          <div data-aos="fade-down" className='bg-[#fafafa] lg:w-[25%] w-full h-[399px] rounded-md flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center'>
              <img src={yums} alt="" />
              <p className='font-semibold text-[18px] text-[#0a0b0a]'>Fresh Green wafers</p>
              <p className='text-[#488129]'>₦7000</p>
              <p className='text-[#9f9c9c] line-through'>₦10000</p>
              <button onClick={incrementCart} title='click to add to your cart' className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center hover:bg-[#2a4a18]">
              <img src={shoppingcart} alt="" />
              add
            </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:flex lg:flex-row md:grid md:grid-cols-2 w-full gap-5'>
          <div data-aos="fade-up" className='bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-md flex flex-col justify-center'>
            <p className='bg-[#67b83a] w-[14%] flex justify-center p-1 rounded-tl-lg text-[#ffff] relative bottom-14'>10%</p>
            <div className='flex flex-col items-center'>
              <img src={freshtomatoes} alt="" />
              <p className='font-semibold text-[18px] text-[#0a0b0a]'>Farm-Fresh Tomatoes</p>
              <p className='text-[#488129]'>₦2000</p>
              <p className='text-[#9f9c9c] line-through'>₦3500</p>
              <button onClick={incrementCart} title='click to add to your cart' className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center hover:bg-[#2a4a18]">
              <img src={shoppingcart} alt="" />
              add
            </button>
            </div>
          </div>

          <div data-aos="fade-down" className='bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-md flex flex-col justify-center'>
            <div className='flex flex-col items-center'>
              <img src={squash} alt="" />
              <p className='font-semibold text-[18px] text-[#0a0b0a]'>Organic Baby Spinach</p>
              <p className='text-[#488129]'>₦5000</p>
              <p className='text-[#9f9c9c] line-through'>₦7000</p>
              <button onClick={incrementCart} title='click to add to your cart' className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center hover:bg-[#2a4a18]">
              <img src={shoppingcart} alt="" />
              add
            </button>
            </div>
          </div>

          <div data-aos="fade-up" className='bg-[#fafafa] lg:w-[25%] h-[399px] w-full rounded-md flex flex-col justify-center'>
            <div className='flex flex-col items-center'>
              <img src={crisp} alt="" />
              <p className='font-semibold text-[18px] text-[#0a0b0a]'>Sweet Bell Hami Mix</p>
              <p className='text-[#488129]'>₦4000</p>
              <p className='text-[#9f9c9c] line-through'>₦7000</p>
              <button onClick={incrementCart} title='click to add to your cart' className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center hover:bg-[#2a4a18]">
              <img src={shoppingcart} alt="" />
              add
            </button>
            </div>
          </div>

          <div data-aos="fade-down" className='bg-[#fafafa] lg:w-[25%] w-full h-[399px] rounded-md flex flex-col justify-center'>
          <div className='flex justify-end'>
            <p className='w-[14%] bg-[#F4D03F] flex justify-center p-1 rounded-tr-lg relative bottom-11'>New</p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={oliveoil} alt="" />
              <p className='font-semibold text-[18px] text-[#0a0b0a]'>Fresh Green wafers</p>
              <p className='text-[#488129]'>₦7000</p>
              <p className='text-[#9f9c9c] line-through'>₦10000</p>
              <button onClick={incrementCart} title='click to add to your cart' className="bg-[#7AC74F] p-2 rounded-lg w-[20% text-[#fff] flex justify-center items-center hover:bg-[#2a4a18]">
              <img src={shoppingcart} alt="" />
              add
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products