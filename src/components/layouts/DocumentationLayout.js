import {
  BellIcon,
  HomeIcon,
  MenuAlt2Icon,
  XIcon,
} from "@heroicons/react/solid";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { FaBroadcastTower, FaFileCode, FaGithubAlt } from "react-icons/fa";
import { Fragment, useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { Children } from "react";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true, external: false },
  {
    name: "Examples",
    href: "/",
    icon: FaFileCode,
    current: false,
    external: false,
  },
  {
    name: "GitHub",
    href: "https://github.com/randyglasgow/relay-it",
    icon: FaGithubAlt,
    current: false,
    external: true,
  },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SideBarMobile = ({ isOpen, setIsOpen }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 flex z-40 md:hidden'
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white'>
            <Transition.Child
              as={Fragment}
              enter='ease-in-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='absolute top-0 right-0 -mr-12 pt-2'>
                <button
                  type='button'
                  className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                  onClick={() => setIsOpen(false)}
                >
                  <span className='sr-only'>Close sidebar</span>
                  <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                </button>
              </div>
            </Transition.Child>
            <div className='flex-shrink-0 flex items-center px-4'>
              <span className='inline-flex justify-start gap-4 items-center px-2 py-2 w-full rounded text-3xl font-medium font-sans text-gray-800'>
                <FaBroadcastTower className='h-8' />
                Relay-It
              </span>
            </div>
            <div className='mt-5 flex-1 h-0 overflow-y-auto'>
              <nav className='flex-0 px-2 pb-4 space-y-1'>
                <h2 className='font-sans font-semibold text-gray-700 text-lg tracking-wide'>
                  Navigation
                </h2>
                {navigation.map((item) => {
                  if (item.external) {
                    return (
                      <a
                        key={item.name}
                        rel='noopener noreferrer'
                        target='_blank'
                        href={item.href}
                        className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:shadow-inner'
                      >
                        <item.icon
                          className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    );
                  } else {
                    return (
                      <Link key={item.name} href={item.href}>
                        <a className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:shadow-inner'>
                          <item.icon
                            className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                            aria-hidden='true'
                          />
                          {item.name}
                        </a>
                      </Link>
                    );
                  }
                })}
              </nav>
              <nav className='flex-1 px-2 pb-4 space-y-1'>
                <h2 className='font-sans font-semibold text-gray-700 text-lg tracking-wide'>
                  Docs
                </h2>
              </nav>
            </div>
          </div>
        </Transition.Child>
        <div className='flex-shrink-0 w-14' aria-hidden='true'>
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
};
const SideBarDesktop = () => {
  return (
    <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className='flex flex-col flex-grow border-r border-gray-200 pt-2 bg-white overflow-y-auto'>
        <div className='flex items-center justify-center flex-shrink-0 px-2'>
          <span className='inline-flex justify-start gap-4 items-center px-2 py-2 w-full rounded text-3xl font-medium font-sans text-gray-800'>
            <FaBroadcastTower className='h-8' />
            Relay-It
          </span>
        </div>
        <div className='mt-5 flex-grow flex flex-col'>
          <nav className='flex-0 px-2 pb-4 space-y-1'>
            <h2 className='font-sans font-semibold text-gray-700 text-lg tracking-wide'>
              Navigation
            </h2>
            {navigation.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.name}
                    rel='noopener noreferrer'
                    target='_blank'
                    href={item.href}
                    className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:shadow-inner'
                  >
                    <item.icon
                      className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                      aria-hidden='true'
                    />
                    {item.name}
                  </a>
                );
              } else {
                return (
                  <Link key={item.name} href={item.href}>
                    <a className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:shadow-inner'>
                      <item.icon
                        className='text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6'
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  </Link>
                );
              }
            })}
          </nav>
          <nav className='flex-1 px-2 pb-4 space-y-1'>
            <h2 className='font-sans font-semibold text-gray-700 text-lg tracking-wide'>
              Docs
            </h2>
          </nav>
        </div>
      </div>
    </div>
  );
};
const SearchBar = ({ openSideBar }) => {
  return (
    <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow'>
      <button
        type='button'
        className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
        onClick={openSideBar}
      >
        <span className='sr-only'>Open sidebar</span>
        <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
      </button>
      <div className='flex-1 px-4 flex justify-between'>
        <div className='flex-1 flex'>
          <form className='w-full flex md:ml-0' action='#' method='GET'>
            <label htmlFor='search-field' className='sr-only'>
              Search
            </label>
            <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
              <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                <SearchIcon className='h-5 w-5' aria-hidden='true' />
              </div>
              <input
                id='search-field'
                className='block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                placeholder='Search'
                type='search'
                name='search'
              />
            </div>
          </form>
        </div>
        <div className='ml-4 flex items-center md:ml-6'>
          <button
            type='button'
            className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <span className='sr-only'>View notifications</span>
            <BellIcon className='h-6 w-6' aria-hidden='true' />
          </button>

          {/* Profile dropdown */}
          <Menu as='div' className='ml-3 relative'>
            <div>
              <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <span className='sr-only'>Open user menu</span>
                <img
                  className='h-8 w-8 rounded-full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700",
                        )}
                      >
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default function DocumentationLayout({ children, title }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </head>
      <SideBarMobile isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <SideBarDesktop />
      <div className='md:pl-64 flex flex-col flex-1'>
        <SearchBar openSideBar={() => setSidebarOpen(true)} />
        <main className='flex-1'>
          <div className='py-6'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
              <h1 className='text-3xl font-semibold text-gray-900 pb-4'>
                {title}
              </h1>
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
