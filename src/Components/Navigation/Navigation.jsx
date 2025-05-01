import React, { useState } from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LogoutIcon from '@mui/icons-material/Logout';

const Navigation = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleLogout = () => {
        // logout logic here
        handleClose();
        // navigate('/login'); // Uncomment to redirect to login after logout
    };

    return (
        <>
            <div className = 'h-screen sticky top-0'>
                <div className = 'py-5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zTa3wuGOL67dvKobhOsLuqIx8P-bnrQS7Q&s" alt="Logo" className="w-1/6" />
                </div>
                <div className="space-y-6">
                    {navigationMenu.map((item) => 

                        <div key={item.title} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-200 p-2 rounded-lg" onClick ={() => item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(item.path)}>
                            <div className="text-xl">{item.icon}</div>
                            <div className="text-lg">{item.title}</div>
                        </div>
                    )
                }
                </div>

                <div>
                    <button className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white font-bold py-3 px-4 rounded-full w-full mt-5 transition-colors duration-200">
                        TWEET
                    </button>
                </div>

                <div className="flex items-center space-x-3 mt-5 p-2">
                    <Avatar alt="username" src="https://toppng.com/uploads/preview/avatar-png-115540218987bthtxfhls.png" />
                    <div>
                        <div className="font-bold text-sm">Aryan Singhal</div>
                        <div className="text-gray-500 text-sm">@aryansinghal</div>
                    </div>
                    <div className="text-gray-700" onClick={handleClick}>
                        <MoreHorizIcon fontSize="small" />
                    </div>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            elevation: 1,
                            sx: {
                                borderRadius: '14px',
                                mt: 1,
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleLogout} className="py-2">
                            <div className="flex items-center space-x-2">
                                <LogoutIcon fontSize="small" />
                                <span>Logout</span>
                            </div>
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </>
    );
}

export default Navigation;