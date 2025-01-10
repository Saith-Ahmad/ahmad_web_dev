'use client';
import React, { useState } from 'react';
import { ModeToggle } from '../theme/ModeToogler';
import Image from 'next/image';
import ShimmerButton from '../ui/shimmer-button';
import { Github, Linkedin, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from 'react-scroll';

import {
  Sheet,
  SheetContent
} from "@/components/ui/sheet"


function FrontHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="container sticky top-4 z-50 ">
      <div className="hidden lg:flex flex-row justify-between items-center px-3 py-1 bg-black bg-opacity-10 dark:bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-xl shadow-[#0000002f] dark:shadow-lg dark:shadow-[#d8b4fe58] h-[80px] overflow-hidden">
        {/* Logo */}
        <div className='w-[150px]'>
          <Image src={'/logo.png'} alt="logo" style={{ width: '100%', height: 'auto' }} width={0} height={0} unoptimized  />
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex gap-4 justify-center items-center text-text_purple dark:text-white">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id} // Use the section ID (without #)
                  smooth={true}
                  offset={-100} // Offset to account for any fixed header height
                  duration={500}
                  spy={true} // Highlight active section automatically
                  activeClass="bg-text_purple text-white" // Class applied to active link
                  className="p-2 rounded-md cursor-pointer font-medium "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-2">
          <ShimmerButton shimmerColor="#F3E8FF" background={'#4A148C'}>
            <span className="text-white">Get In Touch</span>
          </ShimmerButton>
          <Button size={'icon'} className="bg-text_purple">
            <Github fill="white" />
          </Button>
          <Button size={'icon'} className="bg-text_purple">
            <Linkedin fill="white" />
          </Button>
          <ModeToggle />
        </div>
      </div>


      {/* Mobile Nav */}
      <div className='lg:hidden flex flex-row justify-between items-center px-3 py-1 bg-black bg-opacity-10 dark:bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-xl shadow-[#0000002f] dark:shadow-lg dark:shadow-[#d8b4fe58] overflow-hidden h-[70px]'>
        <div className='w-[120px]'>
        <Image src={'/logo.png'} alt="logo" style={{ width: '100%', height: 'auto' }} width={0} height={0} unoptimized  />
        </div>
        <Button size={'icon'} className="bg-text_purple" onClick={() => setIsMobileNavOpen(true)}>
          <Menu fill="white" />
        </Button>
      </div>

      {/* Mobile Nav Menu */}
      <div className='lg:hidden'>
        <Sheet
          open={isMobileNavOpen}
          onOpenChange={(open) => setIsMobileNavOpen(open)}
        >

          <SheetContent className="flex p-5 flex-col justify-start bg-opacity-30 backdrop-blur-lg">
            <div>
              <Image src={'/logo.png'} alt="logo" width={140} height={140} unoptimized />
            </div>

            {/* Navigation Links */}
            <div>
              <ul className="flex flex-col gap-4 justify-start items-start text-text_purple dark:text-white">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.id}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      spy={true}
                      activeClass="bg-text_purple text-white"
                      className="p-2 rounded-md cursor-pointer font-medium "
                      onClick={() => setIsMobileNavOpen(false)} // Close menu on link click
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-start gap-2 ps-2">
              <Button size={'icon'} className="bg-text_purple">
                <Github fill="white" />
              </Button>
              <Button size={'icon'} className="bg-text_purple">
                <Linkedin fill="white" />
              </Button>
              <ModeToggle />
            </div>
            <ShimmerButton shimmerColor="#F3E8FF" background={'#4A148C'}>
              <span className="text-white">Get In Touch</span>
            </ShimmerButton>
          </SheetContent>
        </Sheet>


      </div>
    </div>
  );
}

export default FrontHeader;
