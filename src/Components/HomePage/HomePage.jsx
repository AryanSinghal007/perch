import React from 'react';
import Navigation from '../Navigation/Navigation';
import HomeSection from '../HomeSection/HomeSection';
import RightPanel from '../RightPanel/RightPanel';
import { Route, Routes } from 'react-router-dom';
import Profile from '../Profile/Profile';
import TweetDetails from '../TweetDetails/TweetDetails';

const HomePage = () => {
  return (
    <div className="flex max-w-[1265px] mx-auto">
      <div className="hidden lg:block lg:w-1/4 xl:w-1/5 pr-4 sticky top-0 h-screen">
        <Navigation />
      </div>

      <div className="w-full lg:w-2/4 xl:w-3/5 border-x border-gray-200 min-h-screen px-5 lg:px-10">
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/tweet/:id" element={<TweetDetails />} />
        </Routes>
      </div>

      <div className="hidden lg:block lg:w-1/4 xl:w-1/5 pl-4 sticky top-0 h-screen ml-4 ">
        <RightPanel />
      </div>
    </div>
  );
}

export default HomePage;