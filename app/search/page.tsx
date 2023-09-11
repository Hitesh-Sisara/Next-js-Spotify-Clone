import getSongsbySearch from "@/actions/getSongs_by_search";
import Header from "@/components/header";
import SearchContent from "@/components/search_content";
import SearchInput from "@/components/search_input";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsbySearch(searchParams.title);

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hiddenover overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold"> Search </h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;
