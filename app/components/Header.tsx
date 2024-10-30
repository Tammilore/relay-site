import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap items-center justify-between py-5 px-7" data-controller="navbar" data-navbar-hidden-class="hidden">
      <div className="flex items-center gap-x-3">
        <Link href="/">
          <img src="/relay-logo.png" alt="Maybe Logo" className="h-6" />
        </Link>
        <span className="px-1.5 py-0.5 text-[10px] uppercase bg-white border rounded-full border-gray-200/75 text-gray-500">Beta</span>
      </div>
      <nav className="hidden text-sm text-center gap-x-1 md:flex ml-35">
        <Link href="/" className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-alpha-black-50 rounded-xl">
          Features
        </Link>
        <Link href="/" className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-alpha-black-50 rounded-xl">
          Docs
        </Link>
        <Link href="https://tryrelay.canny.io/changelog" className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-alpha-black-50 rounded-xl">
          Changelog
        </Link>
        <Link href="https://github.com/Relay/relay" className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-alpha-black-50 rounded-xl">
          Contribute
        </Link>
      </nav>
      <div className="flex hidden gap-x-2 md:flex">
        <Link href="https://github.com/Relay/relay" className="px-3 py-[0.45rem] text-sm font-medium text-black rounded-xl hover:bg-alpha-black-50 bg-transparent border border-gray-300 hover:border-gray-300 flex items-center gap-2">
          <img src="/icon-github.svg" alt="GitHub icon" className="h-4 w-4" />
          Give us a star
        </Link>
        {/* <Link href="/#waitlist" className="px-3 py-[0.45rem] text-sm font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 border border-gray-900">
          Join waitlist
        </Link> */}
      </div>
      <div className="md:hidden">
        {/* Mobile menu logic to be implemented based on state */}
      </div>
    </header>
  );
};

export default Header;
