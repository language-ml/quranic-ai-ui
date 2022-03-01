import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { RootStateType } from 'src/app/store';
import { rootUrl } from 'src/configs/base';

export const baseQuery = fetchBaseQuery({
  baseUrl: rootUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootStateType).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
