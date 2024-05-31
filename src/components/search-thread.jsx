import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Input } from "./ui/input";

export default function SearchThread() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") ?? ""
  );

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);

    setSearchParams({
      search: event.target.value,
    });
  };

  return (
    <Input
      type="text"
      className="w-full ring-primary-blue focus:ring-primary-blue"
      placeholder="Cari judul diskusi..."
      value={searchTerm}
      onChange={handleSearchTerm}
    />
  );
}
