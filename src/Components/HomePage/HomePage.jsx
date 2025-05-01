import React from 'react';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';

const HomePage = () => {
  return (
    <div className="flex max-w-[1265px] mx-auto">
      {/* Left sidebar - hidden on mobile */}
      <div className="hidden lg:block lg:w-1/4 xl:w-1/5 pr-4 sticky top-0 h-screen">
        <Navigation />
      </div>

      {/* Middle section - visible on all devices */}
      <div className="w-full lg:w-2/4 xl:w-3/5 border-x border-gray-200 min-h-screen">
        <HomeSection />
      </div>

      {/* Right sidebar - hidden on mobile */}
      <div className="hidden lg:block lg:w-1/4 xl:w-1/5 pl-4 sticky top-0 h-screen">
        <p className='text-center'>right part</p>
      </div>
    </div>
  );
}

export default HomePage;