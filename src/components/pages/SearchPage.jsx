import { useSelector } from "react-redux";
import CategoryCards from "../utils/CategoryCards";
import Nav from "../utils/Nav";

import SideBar from "../utils/SideBar";
import SignupBar from "../utils/SignupBar";

function SearchPage() {
  const { browseList } = useSelector((state) => state.apiData.data);
  console.log(browseList);
  return (
    <div className="h-[100dvh] bg-background flex flex-col flex-between w-[100dvw]">
      <div className="flex  justify-center w-[100dvw] p-2   gap-2  grow">
        <div className="hidden lg:block md:w-[20dvw] md:h-[88dvh]">
          <SideBar type={"searchPage"} />
        </div>
        <div className="flex flex-col grow ">
          <div>
            <Nav />
          </div>

          <div className="flex   flex-col  gap-2 h-[75dvh] grow overflow-y-scroll ">
            <h1 className="text-white text-[2rem] font-bold px-4">
              Browse Lists
            </h1>
            <div className="flex  flex-wrap justify-center lg:justify-start gap-3 lg:items-start min-w-[372px] max-h-[272px] px-1">
              {browseList?.map((curCard) => (
                <CategoryCards
                  key={curCard.id}
                  img={curCard.imageURL}
                  header={curCard.cardName}
                  bgColor={curCard.bgColor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500">
        <SignupBar />
      </div>
    </div>
  );
}

export default SearchPage;
