"use client";

import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction
} from 'react';

import Link from 'next/link';
import Image from 'next/image';

interface NavBarProps {
  setIsLoginOpen: Dispatch<SetStateAction<boolean>>;
  setIsCreateAcountOpen: Dispatch<SetStateAction<boolean>>;
}

const NavBar = ({ setIsLoginOpen, setIsCreateAcountOpen}: NavBarProps) => {
  const [isFixed, setIsFixed] = useState(false);
  const [showTopLink, setShowTopLink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      if (scrollHeight > 500) {
        setShowTopLink(true);
      } else {
        setShowTopLink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="nav" className="fixed w-full z-10 pt-16">
      <div className='mx-20 flex justify-between items-center'>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="#home"
              className='hover:underline underline-offset-8 decoration-red-300'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className='hover:underline underline-offset-8 decoration-red-300'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className='hover:underline underline-offset-8  decoration-red-300'
            >
              Services
            </Link>
          </li>
        </ul>

        <Image src='/logo.png' alt="logo" width={200} height={100} className='' />

        <div className="space-x-4">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="border border-red-300 px-10
            rounded-lg h-10 transition-all hover:scale-105
            duration-150 ease-linear"
          >
            Login
          </button>
          <button
            onClick={() => setIsCreateAcountOpen(true)}
            className='border border-red-300 px-10
            rounded-lg h-10 transition-all hover:scale-105
            duration-150 ease-linear'
          >
            Sign-in
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
