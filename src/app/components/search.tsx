"use client";

import React from "react";
import styles from "@/styles/search.module.css";
import { SearchRequestParameters } from "@/app/lib/parameters";
import handleSearch from "@/app/api/search";

export default function Search() {
  const [parameters, setParameters] = React.useState<SearchRequestParameters>({
    s: "", // Start with one set of parameters
    type: "movie",
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParameters({
      ...parameters,
      s: event.target.value,
    });
  };

  return (
    <>
      <section>
        <input
          type="search"
          className={styles.main}
          value={"s" in parameters ? parameters.s : ""}
          onChange={handleSearchChange}
          placeholder="Start searcing here..."
        />
        <button
          onClick={() => {
            handleSearch(parameters);
          }}
        >
          Search
        </button>
      </section>
    </>
  );
}
