import { FaGithubAlt, FaGlobe, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className='mx-auto p-4 text-center py-12 bg-gray-100'>
        <h1 className='text-xl font-bold border-t pt-6'>
          Relay-It is a project by Randy Glasgow.
        </h1>
        <div className='flex justify-center gap-4 py-4'>
          <a
            href='https://github.com/RandyGlasgow/relay-it'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='bg-gray-300 text-2xl p-2 hover:bg-green-500 hover:text-gray-50 rounded-md shadow-md transition-all duration-200 ease-in-out hover:shadow-green-700'>
              <FaGithubAlt />
            </button>
          </a>
          <a
            href='https://twitter.com/GlasgowRandy'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='bg-gray-300 text-2xl p-2 hover:bg-blue-500 hover:text-blue-50 rounded-md shadow-md transition-all duration-200 hover:shadow-blue-700 ease-in-out'>
              <FaTwitter />
            </button>
          </a>
          <a
            href='https://www.randyglasgow.dev/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='bg-gray-300 text-2xl p-2 hover:bg-orange-500 hover:text-gray-50 rounded-md shadow-md transition-all duration-200 ease-in-out hover:shadow-orange-700'>
              <FaGlobe />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
}
