import { useSelector } from "react-redux";
import Nav from "../utils/Nav";
import PlayListCard from "../utils/PlayListCard";
import SideBar from "../utils/SideBar";
import SignupBar from "../utils/SignupBar";

function Home() {
  const { playlists, featuredPlaylists } = useSelector(
    (state) => state.apiData.data
  );
  console.log(playlists);
  return (
    <div className="h-[100%] bg-background flex flex-col flex-between w-[100dvw]">
      <div className="flex  justify-center w-[100dvw] p-2   gap-2 grow ">
        <div className="hidden lg:block md:w-[20dvw] md:h-[88dvh]">
          <SideBar type={"homepage"} />
        </div>
        <div className="flex flex-col grow ">
          <div>
            <Nav type="homepage" />
          </div>

          <div className="flex flex-col  justify-start  gap-2 ">
            <h1 className="text-white text-[2rem] font-bold ">
              Spotify Playlists
            </h1>
            <div className="flex  flex-wrap  justify-center md:justify-start items-center gap-2 max-h-[300px] overflow-x-auto">
              {playlists?.map((curCard) => (
                <PlayListCard
                  key={curCard.id}
                  img={curCard.image}
                  header={curCard.name}
                  para={curCard.description}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col overflow-hidden justify-start  gap-2 mt-[5rem]">
            <h1 className="text-white text-[2rem] font-bold">
              Dream Playlists
            </h1>
            <div className="flex  flex-wrap justify-center md:justify-start items-center gap-2 max-h-[300px] overflow-x-auto">
              {featuredPlaylists?.map((curCard) => (
                <PlayListCard
                  key={curCard.id}
                  img={curCard.image}
                  header={curCard.name}
                  para={curCard.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <SignupBar />
      </div>
    </div>
  );
}

export default Home;
