import React, { useContext, useEffect, useState } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import { CgClose } from "react-icons/cg";


const Feed = () => {
    const { loading, searchResults } = useContext(Context);
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
		setShowPopup(!showPopup);
	};

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);
    
    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftNav setShowPopup={setShowPopup} />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
                    {!loading &&
                        searchResults.map((item) => {
                            if (item.type !== "video") return false;
                            return (
                                <VideoCard
                                    key={item?.video?.videoId}
                                    video={item?.video}
                                />
                            );
                        })}

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-72 relative">
                <button
                className="text-gray-500 hover:text-gray-800 absolute top-0 right-0 m-3"
                onClick={togglePopup}
                >
                <CgClose className="text-xl" />
                </button>
                <h2 className="text-lg font-semibold text-center">
                Work in Progress
               </h2>
               </div>
               </div>
              )}
                </div>
            </div>
        </div>
    );
};

export default Feed;
