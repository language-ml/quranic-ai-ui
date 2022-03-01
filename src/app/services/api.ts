import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'src/app/services/baseQuery';
export const api = createApi({
  baseQuery: baseQuery,
  tagTypes: [],
  endpoints: (build) => ({}),
});
