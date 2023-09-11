"use client";

import { Song } from "@/types/types";
import { SearchInputFildProps } from "./input_searchbox";
import MediaItem from "./mediaitem";
import SongItem from "./song_item";
import LikedButton from "./likebutton";
import useOnPlay from "@/hooks/useOnPlay";

interface SreacbContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SreacbContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs);
  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No Songs found
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6  ">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onclick={(id: string) => onPlay(id)} data={song} />
          </div>
          <LikedButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
