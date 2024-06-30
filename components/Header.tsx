import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className="photo-profile rounded-full overflow-hidden">
        <Image src={"/ppp.jpg"} width={128} height={128} alt='profile' className='rounded-full' />
      </div>
      <div className="profile flex flex-col" dir='rtl'>
        <h1 className='text-4xl font-bold'>Masyhudi Affandi</h1>
        <p className='text-xl font-semibold text-slate-800 '>Frontend Developer</p>
        <div className="social mt-4 flex gap-4">
          <Link href={'https://github.com/masyhudiaffandi'}>
            <FaGithub size={20} />
          </Link>
          <Link href={'https://www.linkedin.com/in/masyhudiaffandi/'}>
            <FaLinkedin size={20} />
          </Link>
          <Link href={'https://twitter.com/masyhudiaffandi'}>
            <FaTwitter size={20} />
          </Link>
          <Link href={'https://www.instagram.com/masyhudiaffandi/'}>
            <FaInstagram size={20} />
          </Link>
          <Link href={'https://www.instagram.com/masyhudiaffandi/'}>
            <FaTiktok size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
