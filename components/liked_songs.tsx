import getLikedSongs from "@/actions/getSongs_liked_songs";
import Header from "./header";

import Image from "next/image";

const DisplayLiked = async () => {
  const songs = await getLikedSongs();
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mt-20">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <Image
                fill
                src="/images/liked.png"
                alt="Playlist"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default DisplayLiked;
