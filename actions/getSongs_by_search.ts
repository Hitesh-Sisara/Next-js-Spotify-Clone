import { Song } from "@/types/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import getSongs from "./getSongs";

const getSongsbySearch = async (title: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!title) {
    const allsongs = await getSongs();
    return allsongs;
  }

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError.message);
    return [];
  }

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .ilike("title", `%${title}%`)
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
    return [];
  }

  return (data as any) || [];
};

export default getSongsbySearch;
