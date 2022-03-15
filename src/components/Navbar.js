import { FaBroadcastTower } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const HomeButton = () => {
  return (
    <Link href={`/`}>
      <a className='text-gray-50 font-mono flex justify-center items-center gap-2 p-2 px-3 min-w-max transform transition-all duration-100 ease-in-out border-transparent hover:bg-gradient-to-t hover:from-lime-400/20 to-white-200/10 hover:rounded-md border-b-2 hover:border-lime-400'>
        <FaBroadcastTower />
        Relay It
      </a>
    </Link>
  );
};

const navButtons = [
  {
    title: "GitHub",
    href: "https://github.com/RandyGlasgow/relay-it",
    external: true,
  },
];

const NavButton = ({ href, title, external }) => {
  // if the external flag is set just use <a> tag
  if (external) {
    return (
      <a
        className='text-gray-50 font-mono p-2 px-3 transition-all duration-100 ease-in-out border-b-2 border-transparent flex justify-center items-center gap-2 hover:bg-gradient-to-t hover:from-lime-400/20 to-white-200/10 rounded hover:border-lime-400'
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        {title}
      </a>
    );
  }

  return (
    <Link href={href}>
      <a className='text-gray-50 font-mono p-2 px-3 transition-all duration-100 ease-in-out border-b-2 border-transparent flex justify-center items-center gap-2 hover:bg-gradient-to-t hover:from-lime-400/20 to-white-200/10 rounded hover:border-lime-400'>
        {title}
      </a>
    </Link>
  );
};

const SmallDeviceMenu = () => {
  const [active, setActive] = useState(false);
  return (
    <div className='px-4 lg:hidden absolute top-0 w-full flex justify-between items-center text-gray-50'>
      <HomeButton />
      <div>
        <Menu>
          <Menu.Button onClick={() => setActive((prev) => !prev)}>
            <button className='text-3xl p-2 m-1 rounded-md transform transition-all duration-100 ease-in-out hover:bg-white hover:text-gray-900 hover:bg-opacity-70 hover:shadow-md'>
              <IoMenu />
            </button>
          </Menu.Button>

          <Menu.Items>
            <div className='absolute right-0 mx-4 p-2 origin-top bg-white rounded-md focus:outline-transparent bg-opacity-75 shadow-md text-gray-900 grid w-36 gap-2'>
              {navButtons.map((button) => {
                if (button.external) {
                  return (
                    <a
                      key={button.title}
                      href={button.href}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {button.title}
                    </a>
                  );
                }

                return (
                  <Link key={button.title} href={button.href}>
                    <a>{button.title}</a>
                  </Link>
                );
              })}
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default function Navbar() {
  const router = useRouter();

  const isActiveRoute = (href) => {
    return href === router.pathname;
  };

  const LargeDeviceMenu = () => {
    return (
      <div className='hidden lg:flex absolute top-0 w-full justify-center items-center'>
        <HomeButton />
        <div className='flex justify-end items-center gap-4 w-full max-w-6xl py-4'>
          {navButtons.map((button) => (
            <NavButton {...button} key={button.title} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <nav>
      <LargeDeviceMenu />
      <SmallDeviceMenu />
    </nav>
  );
}
