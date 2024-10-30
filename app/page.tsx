import Image from 'next/image';
import Link from 'next/link';
import CTAButtons from './components/CTAButtons';

const HomePage = () => {
  return (
    <div className="text-center">
      <div className="max-w-xl pt-8 mx-auto mb-4 text-[28px] md:text-3xl">
        Relay{' '}
        <Image
          src="/relay-logo.png"
          alt="Maybe Logo"
          width={32}
          height={32}
          className="inline w-8 md:w-auto"
        />{' '}
        is a{' '}
        <em className="relative">
          <span className="border-b-2 border-gray-400 border-dotted">fully</span>
          {/* <sup>*</sup>
          <span className="absolute w-40 md:w-64 text-xs text-left text-gray-400 left-2 -top-8 md:left-16 md:-top-7 -rotate-3">
            <sup>*</sup>your finances are secure
          </span> */}
        </em>{' '}
        open-source
        <div className="inline-flex border rounded-md shadow-[0_1px_8px_0_rgba(0,0,0,0.04)] border-gray-200 scale-[0.8] md:scale-100 ml-2">
          <Link href="https://github.com/Relay/relay" className="px-2 py-1.5 border-r shadow-[inset_0_-2px_5px_0_rgba(0,0,0,0.07)] bg-gray-100 rounded-l-md border-gray-200 flex items-center justify-center">
            <Image
              src="/icon-github.svg"
              alt="GitHub icon"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </Link>
          <span className="px-2 py-1.5 text-sm font-medium bg-white shadow-[inset_0_-2px_5px_0_rgba(0,0,0,0.07)] rounded-r-md">
            GitHub
          </span>
        </div>
        <br></br>
        tool to help you{' '}
        <Image
          src="/capture.svg"
          alt="Capture"
          width={32}
          height={32}
          className="inline w-8 md:w-auto"
        />{' '}
        capture, modify and run network requests{' '}
        {/* <Image
          src="/icon-team.png"
          alt="Maybe Team"
          width={110}
          height={36}
          className="inline h-8 md:h-9"
        />{' '} */}
        right from your browser{' '}
        <Image
          src="/chrome.png"
          alt="Browser"
          width={32}
          height={32}
          className="inline w-8 md:w-auto"
        />
      </div>

      <div className="mx-auto max-w-96" id="waitlist">
        <CTAButtons/>
      </div>

      <div className="p-3 mx-auto my-10 bg-black/[0.02] rounded-3xl border border-black/1 shadow-[0px_0px_22.07px_0px_rgba(0,0,0,0.03)]">
        {/* <Image
          src="/screenshot-three.png"
          alt="Relay Screenshot"
          width={600}
          height={500}
          quality={100}
          className="w-full border border-black/1 rounded-2xl shadow-[0_7.36px_7.36px_-3.68px_rgba(11,11,11,0.03)] shadow-[0_18.39px_22.07px_-3.68px_rgba(11,11,11,0.08)]"
        /> */}
        <img src="/screenshot-three.png" alt="Relay Screenshot" />
      </div>
    </div>
  );
};

export default HomePage;
