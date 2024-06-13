import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import Cart from '../Cart/Cart';
import { Avatar, Tooltip, Button } from "@material-tailwind/react";
import { logout } from '../../features/slices/AuthSlice';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.user.user);
  const { name, image } = user;
  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className='bg-black p-2 w-full'>
        <h3 className='text-white text-2xl font-sans font-bold tracking-normal leading-none text-center'>Welcome</h3>
      </div>
      <div className='flex justify-around items-center'>
        <div>
          <img className='h-28 w-full' src={logo} alt="store" />
        </div>
        <div className='text-white font-sans tracking-normal leading-none text-base m-4 p-3 rounded-md flex cursor-pointer'>
          <Button className='bg-black px-2 rounded-sm mr-4' onClick={() => dispatch(logout())}>
            Logout
          </Button>
          
          <div className='flex flex-row items-center cursor-pointer' onClick={handleOpen}>
            {totalAmount > 0 ? (
              <span className='rounded-full bg-blue-gray-300 px-2 font-sans text-sm mr-1'>{totalAmount}</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="black" className="size-6 ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            )}
            <p className='text-black text-s font-sans flex flex-row items-center '> shopping bag</p>
            <div>{open && <Cart openModal={open} setOpen={setOpen} />}</div>
          </div>
          <div className="flex flex-row items-center cursor-pointer pl-4">
            {image && (
              <Avatar
                src={image}
                alt="avatar"
                size="sm"
                className="mr-2"
              />
            )}
              <p className="font-sans text-md font-medium tracking-normal leading-none text-black">
                Hi {name.charAt(0).toUpperCase() + name.slice(1)}
              </p>
            
          </div>
        </div>
      </div>

      <div className='bg-black p-2 w-full justify-around flex'>
        <div className='text-white text-l font-sans tracking-normal leading-none text-center'>50% OFF</div>
        <div className='text-white text-l font-sans tracking-normal leading-none text-center'>Free Shipping</div>
        <div className='text-white text-l font-sans tracking-normal leading-none text-center'>Easy returns</div>
      </div>
    </>
  );
}

export default Navbar;
