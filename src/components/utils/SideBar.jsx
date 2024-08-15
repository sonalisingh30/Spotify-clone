import { IoSearch } from "react-icons/io5";
import LibraryCards from "./LibraryCards";
import { FaPlus } from "react-icons/fa6";
import { HiGlobeAlt, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const LibraryCardDeatils = [
  {
    id: 0,
    header: "Create your first playlist",
    para: "It' easy, we'll help you",
    btnContent: "Create playlist",
  },
  {
    id: 1,
    header: "Let's find some podcasts to follow",
    para: "We'll keep you updated on new episodes",
    btnContent: "Browse podcasts",
  },
];
const navStyles = `font-semibold text-[1.1rem] hover:underline cursor-pointer`;
function SideBar({ type }) {
  return (
    <div className=" flex flex-col gap-y-2 h-full bg-background  w-[20dvw] ">
      <div className="bg-nav_bg px-4 py-6 ">
        <ul className="flex flex-col gap-y-5">
          <li className="flex gap-1 items-center ">
            <span className="text-white">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="fill-white w-[2rem] h-[2rem]"
              >
                <path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm5.045 15.866a.686.686 0 0 1-.943.228c-2.583-1.579-5.834-1.935-9.663-1.06a.686.686 0 0 1-.306-1.337c4.19-.958 7.785-.546 10.684 1.226a.686.686 0 0 1 .228.943zm1.346-2.995a.858.858 0 0 1-1.18.282c-2.956-1.817-7.464-2.344-10.961-1.282a.856.856 0 0 1-1.11-.904.858.858 0 0 1 .611-.737c3.996-1.212 8.962-.625 12.357 1.462a.857.857 0 0 1 .283 1.179zm.116-3.119c-3.546-2.106-9.395-2.3-12.78-1.272a1.029 1.029 0 0 1-.597-1.969c3.886-1.18 10.345-.952 14.427 1.471a1.029 1.029 0 0 1-1.05 1.77z"></path>
              </svg>
            </span>
            <span className="text-white font-medium">Spotify</span>
          </li>
          <li className="flex items-center gap-x-4">
            <HiHome
              className={`text-white text-[1.8rem]  ${
                type === "homepage" ? "fill-white" : "fill-gray_text"
              } `}
            />
            <span
              className={`${
                type === "homepage" ? "text-white" : "text-gray_text"
              } ${navStyles}`}
            >
              <NavLink to="/">Home</NavLink>
            </span>
          </li>
          <li className="flex items-center gap-x-4">
            <IoSearch
              className={`text-white text-[1.8rem]  ${
                type === "searchPage" ? "fill-white" : "fill-gray_text"
              } `}
            />
            <span
              className={`${
                type === "searchPage" ? "text-white" : "text-gray_text"
              } ${navStyles}`}
            >
              <NavLink to="/search">Search</NavLink>
            </span>
          </li>
        </ul>
      </div>
      <div className="bg-nav_bg rounded-t-lg px-4 py-3 grow relative ">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-3 py-2  ">
            <span>
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="fill-gray_text w-[2rem] h-[2rem] hover:fill-white"
              >
                <path d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"></path>
              </svg>
            </span>
            <span className="font-semibold text-[1.1rem] text-gray_text hover:text-white">
              Your Library
            </span>
          </div>
          <div>
            <FaPlus className="text-gray_text hover:text-white" />
          </div>
        </div>
        <div className=" flex  flex-col justify-between ">
          <div className="h-[30dvh] overflow-y-scroll">
            {LibraryCardDeatils.map((curCard) => (
              <LibraryCards
                header={curCard.header}
                para={curCard.para}
                buttonContent={curCard.btnContent}
                key={curCard.id}
              />
            ))}
          </div>
          <div className="mt-[5rem] flex  flex-col items-start justify-center gap-10">
            <span className="text-gray_text hover:underline">Cookies</span>
            <div className="flex  flex-row items-center border-white border  py-1 px-2 rounded-full gap-1 hover:scale-110 hover:border-2">
              <HiGlobeAlt className="text-white" />
              <span className="font-medium text-white ">English</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
