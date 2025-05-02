import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TweetCard from "../HomeSection/TweetCard";
import Divider from "@mui/material/Divider";

const TweetDetails = () => {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <React.Fragment>
            <section className="bg-white z-50 flex items-center sticky top-0 bg-white bg-opacity-95 px-4 mt-4 mb-4">
                <KeyboardBackspaceIcon
                    className="cursor-pointer hover:text-gray-900"
                    onClick={handleBack}
                />
                <div className="ml-6">
                    <h1 className="text-xl font-bold">Tweet</h1>
                </div>
            </section>

            <section>
                <TweetCard/>
                <Divider sx = {{margin: "2rem 0rem"}}/>
            </section>

            <section>
                {[1, 1, 1, 1].map((item) => <TweetCard/>)}
                
            </section>
        
        </React.Fragment>
    );
}

export default TweetDetails;