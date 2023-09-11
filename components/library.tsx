"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModel from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModel from "@/hooks/use_upload_modal";
import { Song } from "@/types/types";
import MediaItem from "./mediaitem";
import useOnPlay from "@/hooks/useOnPlay";
import useSubscribeModal from "@/hooks/use_sbscribe_modal";

interface LibararyProps {
  songs: Song[];
}

const Library: React.FC<LibararyProps> = ({ songs }) => {
  const subscribeModal = useSubscribeModal();
  const authModel = useAuthModel();
  const uploadModel = useUploadModel();
  const { user, subscription } = useUser();

  const onPlay = useOnPlay(songs);

  const onClick = () => {
    if (!user) {
      return authModel.onOpen();
    }

    if (!subscription) {
      return subscribeModal.onOpen();
    }

    return uploadModel.onOpen();
    //TODO: handle upload later
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center  justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Libarary</p>
        </div>

        <AiOutlinePlus
          cinst
          auth
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white taransition"
        />
      </div>

      <div className=" flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((item) => (
          <MediaItem
            data={item}
            onclick={(id: string) => onPlay(id)}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
