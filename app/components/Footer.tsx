import Link from 'next/link';
import SubscribeForm from './SubscribeForm';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-5xl p-6 mx-auto my-8 md:p-4">
      <div className="flex flex-col justify-between gap-x-4 md:flex-row">
        <div className="flex flex-col gap-y-4 max-w-96">
          <Link href="/">
            <img src="/relay-logo-gray.svg" alt="Maybe Logo" className="w-10 inline" />
          </Link>
          <p className="text-sm text-gray-500">Get updates on new features as soon as we add them.</p>
          <SubscribeForm />
        </div>
        <div className="flex flex-col text-sm leading-6 text-gray-500 gap-x-10 md:flex-row">
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase">General</h4>
            <ul className="flex flex-col gap-y-1">
            <Link href="#" className="text-[#141414]">
              Features
              </Link>
              <Link href="#" className="text-[#141414]">
              Docs
              </Link>
              <Link href="https://tryrelay.canny.io/changelog" className="text-[#141414]">
              Changelog
              </Link>
              <Link href="https://github.com/tryrelay/relay" className="text-[#141414]">
               Contribute
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase">More</h4>
            <ul className="flex flex-col gap-y-1">
              <Link href="#" className="text-[#141414]">
              Join Community
              </Link>
              <Link href="https://github.com/tryrelay/relay" className="text-[#141414]">
              Self-Host
              </Link>
              <Link href="/privacy-policy" className="text-[#141414]">
              Privacy Policy
              </Link>
              <Link href="#" className="text-[#141414]">
               Terms of Service
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase">Social</h4>
            <ul className="flex flex-col gap-y-1">
            <Link href="#" className="text-[#141414]">
              Discord
              </Link>
              <Link href="#" className="text-[#141414]">
              Twitter
              </Link>
              <Link href="#" className="text-[#141414]">
              LinkedIn
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between mt-12 text-sm text-center text-gray-500 md:flex-row md:text-left">
        <p>© {new Date().getFullYear()} Relay</p>
        <p>Made with ❤️ on planet Earth.</p>
      </div>
    </footer>
  );
};

export default Footer;
