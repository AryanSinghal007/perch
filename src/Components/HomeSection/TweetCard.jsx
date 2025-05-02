import React from "react";
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import { Menu, MenuItem } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const TweetCard = ({ tweet }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const handleDelete = () => {
        // delete logic here
        handleClose();
    }

    const handleOpenReplyModel = () => {
        // open reply model logic here
        console.log("Open reply model");
    }

    const handleCreateReTweet = () => {
        // create retweet logic here
        console.log("Create retweet");
    }

    const handleLikeTweet = () => {
        // like tweet logic here
        console.log("Like tweet");
    }

    return (
        
        // <div className="flex items-center font-semibold text-gray-700 py-2">
        //     <RepeatIcon/>
        //     <p>You retweet</p>

        // </div>

        <div className="flex space-x-5">
            <Avatar 
            alt="username" 
            src="https://toppng.com/uploads/preview/avatar-png-115540218987bthtxfhls.png" 
            className="cursor-pointer"
            sx={{ width: 35, height: 35 }}
            onClick={() => navigate(`/profile/${6}`)}
            />
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <span className="font-semibold text-sm">Aryan Singhal</span>
                        <span className="text-gray-500 text-sm">@aryansinghal . 2min</span>
                        <img className = "ml-2 w-5 h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png" alt="" />
                    </div>
                    <div>
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
                        <MenuItem onClick={handleDelete} className="py-2">
                            <div className="flex items-center space-x-2">
                                <LogoutIcon fontSize="small" />
                                <span>Delete</span>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className="flex items-center space-x-2">
                                <EditIcon fontSize="small" />
                                <span>Edit</span>
                            </div>
                        </MenuItem>
                    </Menu>
                    </div>
                    
                </div>

                <div className="mt-2">
                    <div className="cursor-pointer">
                        <p className="mb-2 p-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                        <img className="w-[28rem] border border-gray-400 p-5 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Q0ue06sLTd7p0SbG_JKOEieaPj9xD8Thpg&s" alt="" />
                    </div>
                    <div className="flex py-5 flex-wrap justify-between items-center">

                        <div className="flex space-x-3 items-center text-gray-600">
                            <ChatBubbleOutlineIcon className="cursor-pointer" onClick={handleOpenReplyModel}/>
                            <p>45</p>
                        </div>

                        <div className={`${true ? "text-pink-600": "text-gray-600"} flex space-x-3 items-center`}>
                            <RepeatIcon className="cursor-pointer" onClick={handleCreateReTweet}/>
                            <p>45</p>
                        </div>

                        <div className={`${true ? "text-pink-600": "text-gray-600"} flex space-x-3 items-center`}>
                            {true ? <FavoriteIcon className="cursor-pointer" onClick={handleLikeTweet}/> : <FavoriteBorderIcon className="cursor-pointer" onClick={handleLikeTweet}/>}
                            <p>45</p>
                        </div>

                        <div className="flex space-x-3 items-center text-gray-600">
                            <BarChartIcon className="cursor-pointer" onClick={handleOpenReplyModel}/>
                            <p>45</p>
                        </div>

                        <div className="flex space-x-3 items-center text-gray-600">
                            <FileUploadIcon className="cursor-pointer" onClick={handleOpenReplyModel}/>
                        </div>

                    </div>
                </div>
            </div>
        </div> 
    );
}
export default TweetCard;