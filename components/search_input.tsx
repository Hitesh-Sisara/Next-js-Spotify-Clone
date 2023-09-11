"use client";

import qs from "query-string";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDeblunce";
import SearchInputFild from "./input_searchbox";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedvalue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedvalue,
    };
    const url = qs.stringifyUrl({ url: "/search", query: query });

    router.push(url);
  }, [debouncedvalue, router]);

  return (
    <SearchInputFild
      placeholder="What do you want to listed to "
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
