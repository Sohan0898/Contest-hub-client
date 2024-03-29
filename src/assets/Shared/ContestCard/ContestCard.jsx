import { Link } from "react-router-dom";
import "./cardStyle.css";

import { HiMiniArrowLeftOnRectangle } from "react-icons/hi2";

const ContestCard = ({ image, name, join, tag, task, contestid }) => {
  return (
    <div className="flex shadow-lg image-container rounded-md ">
      <div
        className={`hero image hover:bg-cover`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="  rounded-sm w-full h-[340px]   hero-overlay bg-opacity-10 bg-gradient-to-l from-[#050505] to-[#12121200]"></div>

        <div className="absolute left-7 top-6 ">
          <div className="bg-amber-500 px-2 shadow-sm py-1 rounded text-xs text-gray-200 font-semibold">
            <p className="drop-shadow">{join} Attemps</p>
          </div>
        </div>
      </div>

      <div className="bg-[#0e0e0e]  w-9">
        <p className="mt-40 text-gray-800   text-center">
          <span className="text-3xl">
            {" "}
            <HiMiniArrowLeftOnRectangle />
          </span>
        </p>
        <div className="image-info">
          <div className="pl-2 ">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <div className="pt-3 ">
              <p className="pt-1 text-gray-300 font-semibold ">Tag : {tag}</p>
              <p className="text-xs text-gray-400 mt-1 ">
                Contest Task : {task}
              </p>
              <Link to={`/contestDetails/${contestid}`}>
                <button className="absolute bg-gray-300 px-3 text-black font-hind text-sm font-semibold rounded hover:bg-gray-400 py-2 bottom-4 transition duration-300 ease-in-out">
                  See more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
