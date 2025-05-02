import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const RightPanel = () => {

    const handleChangeTheme = () => {
        // Logic to change the theme
        console.log("Change theme");
    }

  return (
    <div className='py-5 sticky top'>
        <div className='flex items-center relative'>
            <input 
                className="py-3 rounded-full bg-gray-100 text-gray-500 w-full pl-12 focus:outline-none focus:ring-1 focus:ring-blue-200" 
                type="text" 
                placeholder="Search pearch"
            />            
            <div className='absolute top-0 left-0 pl-3 pt-3'>
                <SearchIcon className='text-gray-500' />
            </div>
            <Brightness4Icon 
                className='text-gray-500 ml-3 cursor-pointer'
                onClick={handleChangeTheme} 
            />

        </div>

        <section className='my-5'>
            <h1 className='text-xl font-bold'> Get Verified</h1>
            <h1 className='font-bold my-3'> Subscribe to unlock more features</h1>
            <Button variant = "contained" sx = {{backgroundColor: "#1d9bf0", color: "white", width: "100%", padding: "10px", paddingX: "20px", borderRadius: "25px"}} > 
                Get Verified
            </Button>
        </section>

        <section className='mt-5 space-y-5'>
            <h1 className='font-bold text-xl py-3'>What's happening</h1>
            {[1, 1, 1, 1, 1, 1].map((item) => 
                <div className='flex justify-between w-full'>
                    <div>
                        <p className='text-sm'> FIFA WOMEN'S WORLD CUP</p>
                        <h1 className='font-bold'> Portugal VS France </h1>
                        <p className='text-sm'> 2.5M Tweets</p>
                    </div>
                    <MoreHorizIcon className='text-gray-500 cursor-pointer' />
                </div>
            )}
            
        </section>

    </div>
  );
}
export default RightPanel;