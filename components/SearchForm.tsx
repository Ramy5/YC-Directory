import React from "react";
import Form from "next/form";
import ResetButton from "./ResetButton";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action={"/"} className="search-form">
      <input
        type="text"
        defaultValue={query}
        name="query"
        placeholder="Search Startups"
        className="search-input"
      />
      <div className="flex gap-2">
        {query && <ResetButton />}
        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
