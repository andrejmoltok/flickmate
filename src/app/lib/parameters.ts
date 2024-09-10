interface SearchIDTitleParameters {
  i?: string;
  t?: string;
  type: string;
  plot: string;
}

interface SearchParameters {
  s: string;
  type: string;
  page?: number;
}

export type SearchRequestParameters =
  | ({ s: string } & Omit<SearchParameters, "s">)
  | ({ i?: string; t?: string } & Omit<SearchIDTitleParameters, "i" | "t">);
