import { SearchRequestParameters } from "@/app/lib/parameters";

export const constructURL = (params: SearchRequestParameters): string => {
  const baseUrl = `https://www.omdbapi.com/`;

  // Create a URLSearchParams object to handle query parameters
  const urlParams = new URLSearchParams();

  if ("s" in params) {
    // Handle case for SearchParameters
    urlParams.append("s", params.s);
    urlParams.append("type", params.type);
    //urlParams.append("r", "json"); // assuming 'r' is always 'json'
    //urlParams.append("page", params.page?.toString() as string);
  } else if ("i" in params || "t" in params) {
    // Handle case for SearchIDTitleParameters
    if (params.i) urlParams.append("i", params.i);
    if (params.t) urlParams.append("t", params.t);
    urlParams.append("type", params.type);
    urlParams.append("plot", params.plot);
    //urlParams.append("r", "json"); // assuming 'r' is always 'json'
  }

  // Combine base URL with constructed query parameters
  return `${baseUrl}&${urlParams.toString()}&apikey=${
    process.env.API_KEY as string
  }`;
};
