
// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";

// import LeftNavMenuItem from "./LeftNavMenuItem";
// import { categories } from "../utils/constants";
// import { Context } from "../context/contextApi";

// const LeftNav = () => {
// 	const { selectedCategory, setSelectedCategory, mobileMenu } =
// 		useContext(Context);

// 	const navigate = useNavigate();

// 	const clickHandler = (name, type) => {
// 		switch (type) {
// 			case "category":
// 				return setSelectedCategory(name);
// 			case "home":
// 				return setSelectedCategory(name);
// 			case "menu":
// 				return false;
// 			default:
// 				break;
// 		}
// 	};

// 	return (
// 		<div
// 			className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
// 				mobileMenu ? "translate-x-0" : ""
// 			}`}
// 		>
// 			<div className="flex px-5 flex-col">
// 				{categories.map((item) => {
// 					return (
// 						<React.Fragment key={item.name}>
// 							<LeftNavMenuItem
// 								text={item.type === "home" ? "Home" : item.name}
// 								icon={item.icon}
// 								action={() => {
// 									clickHandler(item.name, item.type);
// 									navigate("/");
// 								}}
// 								className={`${
// 									selectedCategory === item.name ? "bg-white/[0.15]" : ""
// 								}`}
// 							/>
// 							{item.divider && <hr className="my-5 border-white/[0.2]" />}
// 						</React.Fragment>
// 					);
// 				})}
// 				<hr className="my-5 border-white/[0.2]" />
// 				<div className="text-white/[0.5] text-[12px]">Clone by: ABHILASHA</div>
// 			</div>
// 		</div>
// 	);
// };

// export default LeftNav;
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } = useContext(Context);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); 
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
      case "home":
        setSelectedCategory(name);
        navigate("/");
        break;
      case "menu":
        if (["Settings", "Report History", "Help", "Send feedback"].includes(name)) {
          setShowPopup(true);
        }
        break;
      default:
        break;
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                }}
                className={`${
                  selectedCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">Clone by: ABHILASHA</div>
      </div>
     
	  {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-72 relative">
                <button
                className="text-gray-500 hover:text-gray-800 absolute top-0 right-0 m-3"
                onClick={closePopup}
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
  );
};

export default LeftNav;



