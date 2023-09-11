"use client";

import useGetSongById from "@/hooks/get_song_by";
import usePlayer from "@/hooks/usePlayer";
import useLoadSongUrl from "@/hooks/use_Load_song_url";
import PlayerContent from "./palyer_content";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div
      className="
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
      "
    >
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
};

export default Player;
