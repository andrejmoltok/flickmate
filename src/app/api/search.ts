"use server";

import { SearchRequestParameters } from "@/app/lib/parameters";
import { constructURL } from "@/app/lib/construct";
export default async function handleSearch(
  parameters: SearchRequestParameters
) {
  const url: string = constructURL(parameters);

  try {
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
