// libraries
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// types
import type { BaseQueryFn } from "@reduxjs/toolkit/query";

const baseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  // ToDo : set interface for result

  // @ts-ignore
  //ToDo : set interface for result
  const result: any = await fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  })(args, api, extraOptions);

  //ToDo : set interface for error
  const error: any = result.error && result.error;
  if (error) {
    console.log("error", error);
  }

  return result;
};

export const emptySplitApi = createApi({
  baseQuery,
  endpoints: () => ({}),
});
