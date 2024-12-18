import React from 'react';
import Link from 'next/link';

const CTAButtons: React.FC = () => {
  return (
    <div className="flex gap-x-2 ml-12 pt-3 md:gap-x-4">
        <Link href="https://chromewebstore.google.com/detail/relay-%E2%80%93-intercept-modify/kilmhgoembjiamcmcbecekdonljjiolg" className="px-3 py-[0.45rem] text-sm font-medium text-black rounded-xl hover:bg-alpha-black-50 bg-transparent border border-gray-300 hover:border-gray-300 flex items-center gap-2">
          <img src="/chrome.png" alt="Chrome Logo" className="h-4 w-4" />
          Add to chrome
        </Link>
        <Link href="https://github.com/tryrelay/relay" className="px-3 py-[0.45rem] text-sm font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 border border-gray-900">
          Run locally
        </Link>
      </div>
  );
};

export default CTAButtons;
