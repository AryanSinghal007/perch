import React from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Avatar, Box, Button, Tabs, Tab, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import VerifiedIcon from '@mui/icons-material/Verified';
import TweetCard from '../HomeSection/TweetCard';

const Profile = () => {
    const navigate = useNavigate();
    const [tabValue, setTabValue] = React.useState(0);
    
    const handleBack = () => {
        navigate(-1);
    };

    const handleOpenProfileModel = () => {
        console.log("Open Profile Model");
    };

    const handleFollowUser = () => {
        console.log("Follow User");
    };
    
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div className="bg-white">
            
            <section className="bg-white z-50 flex items-center sticky top-0 bg-white bg-opacity-95 px-4 mt-4 mb-4">
                <KeyboardBackspaceIcon
                    className="cursor-pointer hover:text-gray-900"
                    onClick={handleBack}
                />
                <div className="ml-6">
                    <h1 className="text-xl font-bold">Aryan Singhal</h1>
                    {/* <p className="text-sm text-gray-500">1,024 Tweets</p> */}
                </div>
            </section>

            
            <section className="relative mt-4">
                <div className="h-48 md:h-64 w-full overflow-hidden">
                    <img 
                        className="w-full h-full object-cover"
                        src="https://adllinsmedia.com.au/wp-content/uploads/2023/09/Adllins-Media-Social-Marketing-Platforms.jpg" 
                        alt="Cover" 
                    />
                </div>
                
                
                <Avatar
                    className="absolute -translate-y-16 left-4 border-4 border-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
                    alt="Aryan Singhal"
                    src="https://t3.ftcdn.net/jpg/08/20/75/34/360_F_820753420_Nqjb8USaj0J7K82Uo6yZLhCv4roZFBj7.jpg"
                    sx={{ 
                        width: 120, 
                        height: 120,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)" 
                    }}
                />
                
                
                <div className="absolute bottom-4 right-4">
                    {true ? (
                        <button 
                            className="px-4 py-1.5 rounded-full border border-gray-300 font-bold text-black bg-white hover:bg-gray-100 transition-colors duration-200"
                            onClick={handleOpenProfileModel}
                        >
                            Edit Profile
                        </button>
                    ) : (
                        <button 
                            className="px-5 py-2 rounded-full bg-black text-white font-bold hover:bg-gray-800 transition-colors duration-200"
                            onClick={handleFollowUser}
                        >
                            {true ? "Follow": "Unfollow"}
                        </button>
                    )}
                </div>
            </section>
            
            
            <section className="px-4 mt-0 -translate-y-8">
                <div>
                    <div className="flex items-center">
                        <h2 className="font-bold text-xl">Aryan Singhal</h2>
                        <VerifiedIcon className="ml-1 text-blue-500" sx={{ fontSize: 18 }} />
                    </div>
                    <p className="text-gray-500">@aryansinghal</p>
                    
                    <p className="mt-3 text-gray-800 text-base">
                        Software Engineer | Web Developer | Tech Enthusiast | Building awesome experiences for the web
                    </p>
                    
                    <div className="flex flex-wrap items-center mt-3 text-gray-500 text-sm">
                        <div className="flex items-center mr-4 mb-2">
                            <LocationOnIcon sx={{ fontSize: 18 }} />
                            <span className="ml-1">New Delhi, India</span>
                        </div>
                        <div className="flex items-center mr-4 mb-2">
                            <DateRangeIcon sx={{ fontSize: 18 }} />
                            <span className="ml-1">Joined May 2023</span>
                        </div>
                    </div>
                    
                    <div className="flex mt-3 space-x-5">
                        <div className="flex items-center hover:underline cursor-pointer">
                            <span className="font-bold">245</span>
                            <span className="text-gray-500 ml-1">Following</span>
                        </div>
                        <div className="flex items-center hover:underline cursor-pointer">
                            <span className="font-bold">10.2K</span>
                            <span className="text-gray-500 ml-1">Followers</span>
                        </div>
                    </div>
                </div>
            </section>
            
            <Box sx={{ width: '100%', mt: 0 }}>
                <Tabs 
                        value={tabValue} 
                        onChange={handleTabChange}
                        variant="fullWidth"
                        sx={{
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#1d9bf0',
                                height: 3
                            },
                            '& .Mui-selected': {
                                color: '#000 !important',
                                fontWeight: 'bold'
                            },
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontSize: '14px'
                            }
                        }}
                    >
                        <Tab label="Tweets" />
                        <Tab label="Replies" />
                        <Tab label="Media" />
                        <Tab label="Likes" />
                </Tabs>
            </Box>
            
            {/* Content area - Could contain tweets */}
            <section className="px-4 py-4">
                {tabValue === 0 && (
                    <div className="space-y-4">
                        {[1, 1, 1, 1].map((item) => (
                            <div className="border-b border-gray-100 pb-4">
                                {false ? (
                                    <p className="text-gray-500 text-center py-8">
                                        Tweets will appear here
                                    </p>
                                ) : <TweetCard/>}
                                
                            </div>

                        ))}
                        
                    </div>
                )}
                {tabValue === 1 && (
                    <p className="text-gray-500 text-center py-8">
                        Replies will appear here
                    </p>
                )}
                {tabValue === 2 && (
                    <p className="text-gray-500 text-center py-8">
                        Media will appear here
                    </p>
                )}
                {tabValue === 3 && (
                    <p className="text-gray-500 text-center py-8">
                        Likes will appear here
                    </p>
                )}
            </section>
        </div>
    );
}

export default Profile;