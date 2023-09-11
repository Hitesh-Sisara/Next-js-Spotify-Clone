"use client";

import Image from "next/image";

import useLoadImage from "@/hooks/use_load_image";
import { Song } from "@/types/types";
import usePlayer from "@/hooks/usePlayer";

interface MediaItemProps {
  data: Song;
  onclick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onclick }) => {
  const imageUrl = useLoadImage(data);
  const player = usePlayer();

  const handleClick = () => {
    if (onclick) {
      return onclick(data.id);
    }

    player.setId(data.id);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          fill
          src={imageUrl || "/images/liked.png"}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate ">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate  ">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
